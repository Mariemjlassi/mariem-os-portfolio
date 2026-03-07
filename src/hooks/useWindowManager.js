import { useState, useCallback, useRef } from 'react';

export function useWindowManager() {
  const [windows, setWindows] = useState({});
  const zRef = useRef(200);

  const getZ = () => ++zRef.current;

  const openWindow = useCallback((id) => {
    setWindows(prev => {
      const existing = prev[id];
      if (existing && existing.state !== 'closed') {
        return {
          ...prev,
          [id]: { ...existing, state: 'normal', z: getZ() },
        };
      }
      return {
        ...prev,
        [id]: {
          state: 'normal',
          z: getZ(),
          x: existing?.x ?? 120 + Math.random() * 60,
          y: existing?.y ?? 60 + Math.random() * 40,
          w: existing?.w ?? null,
          h: existing?.h ?? null,
          prevX: null, prevY: null, prevW: null, prevH: null,
        },
      };
    });
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows(prev => ({ ...prev, [id]: { ...prev[id], state: 'closed' } }));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows(prev => ({ ...prev, [id]: { ...prev[id], state: 'minimized' } }));
  }, []);

  const maximizeWindow = useCallback((id, deskW, deskH) => {
    setWindows(prev => {
      const win = prev[id];
      if (!win) return prev;
      if (win.state === 'maximized') {
        return {
          ...prev,
          [id]: {
            ...win,
            state: 'normal',
            x: win.prevX ?? 120,
            y: win.prevY ?? 60,
            w: win.prevW ?? null,
            h: win.prevH ?? null,
          },
        };
      }
      return {
        ...prev,
        [id]: {
          ...win,
          state: 'maximized',
          prevX: win.x, prevY: win.y,
          prevW: win.w, prevH: win.h,
          x: 0, y: 0,
          w: deskW, h: deskH,
        },
      };
    });
  }, []);

  const focusWindow = useCallback((id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], z: getZ() },
    }));
  }, []);

  const moveWindow = useCallback((id, x, y) => {
    setWindows(prev => ({ ...prev, [id]: { ...prev[id], x, y } }));
  }, []);

  const resizeWindow = useCallback((id, w, h) => {
    setWindows(prev => ({ ...prev, [id]: { ...prev[id], w, h } }));
  }, []);

  const isOpen = (id) => windows[id] && windows[id].state !== 'closed';
  const resetWindows = useCallback(() => setWindows({}), []);
  const isVisible = (id) => windows[id] && windows[id].state === 'normal' || windows[id]?.state === 'maximized';

  return {
    windows,
    openWindow, closeWindow, minimizeWindow,
    maximizeWindow, focusWindow, moveWindow, resizeWindow,
    isOpen, isVisible, resetWindows,
  };
}