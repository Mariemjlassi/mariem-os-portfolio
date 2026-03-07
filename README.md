# 🖥️ MARIEM-OS — Retro Portfolio OS

Un portfolio interactif simulant Windows 95 + MS-DOS, construit avec React + Vite.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Démarrer en mode développement
npm run dev

# Builder pour production
npm run build
```

## 📝 Personnalisation

**Tout le contenu est dans un seul fichier :**
```
src/data/portfolioData.js
```

Modifie `USER`, `PROJECTS`, `SKILLS`, `EXPERIENCE`, etc. dans ce fichier.

## 🌐 Déploiement sur Netlify

### Option 1 — Glisser-déposer (le plus simple)
1. `npm run build`
2. Va sur [netlify.com](https://netlify.com)
3. Glisse le dossier `dist/` dans Netlify Drop

### Option 2 — Via GitHub (recommandé)
1. Push ce projet sur GitHub
2. Va sur [netlify.com](https://netlify.com) → "New site from Git"
3. Connecte ton repo GitHub
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Clique Deploy !

Le fichier `netlify.toml` est déjà configuré ✓

## 🎮 Fonctionnalités

- **Boot BIOS** — Séquence de démarrage animée
- **DOS Loader** — Barre de progression style Windows
- **Bureau Windows 95** — Icônes double-cliquables
- **Fenêtres draggables** — Déplacer, maximiser, minimiser, fermer
- **Start Menu** — Avec tous les programmes
- **Taskbar** — Horloge + boutons fenêtres ouvertes
- **Clic droit** — Context menu sur le bureau
- **MS-DOS Terminal** — 15+ commandes fonctionnelles
- **About Me** — Notepad style avec ta bio
- **Projects** — File Explorer avec détail projet
- **Skills.cfg** — Fichier INI de config
- **CV.txt** — Notepad avec ton CV
- **Contact.exe** — Formulaire dial-up modem
- **Shut Down** — Animation d'extinction complète
- **Corbeille** — Fonctionnelle (affiche "vide")
- **Effets CRT** — Scanlines + vignette

## 📁 Structure

```
src/
├── data/
│   └── portfolioData.js    ← ✏️ MODIFIER ICI
├── components/
│   ├── BiosScreen.jsx
│   ├── DosLoader.jsx
│   ├── Desktop.jsx
│   ├── Taskbar.jsx
│   ├── StartMenu.jsx
│   ├── Win95Window.jsx
│   ├── Terminal.jsx
│   ├── AboutWindow.jsx
│   ├── CvWindow.jsx
│   ├── ProjectsWindow.jsx
│   ├── SkillsWindow.jsx
│   ├── ContactWindow.jsx
│   ├── ShutdownScreen.jsx
│   └── MsgBox.jsx
├── hooks/
│   └── useWindowManager.js
└── App.jsx
```
