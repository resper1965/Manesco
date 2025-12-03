# Manesco - Security Governance Presentation

> Professional interactive presentation for security governance status using CIS Controls IG2 framework

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)

## 📋 Overview

Interactive web-based presentation showcasing Manesco's security governance status, CIS Controls implementation progress, vulnerability management, and action plan. Built with Next.js 16, React 19, and professional Shadcn-style components.

### ✨ Key Features

- 🎯 **28 Professional Slides** across 6 thematic sections
- 🗺️ **Advanced Navigation** with interactive minimap
- 🎤 **Presenter Mode** with timer and notes
- ⌨️ **12+ Keyboard Shortcuts** for efficient control
- 📊 **Real Data Visualizations** using Recharts
- 🎨 **Ness Design System** with brand colors
- ♿ **Full Accessibility** with keyboard navigation
- 🌙 **Theme System** (Dark + High Contrast modes)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone the repository
git clone https://github.com/resper1965/Manesco.git
cd Manesco

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

### Build for Production

```bash
# Build optimized version
npm run build

# Start production server
npm start
```

---

## 🎨 Presentation Structure

### Sections & Slides

1. **Introduction** (Slides 1-5)
   - Cover slide
   - Executive overview dashboard
   - Agenda
   - CIS Framework explanation
   - Why IG2 for Manesco

2. **CIS Controls** (Slides 6-13)
   - 18 controls overview
   - Status vs market reference
   - Implementation evolution
   - Worked controls (8 priority)
   - Maturity analysis

3. **Vulnerabilities** (Slides 14-17)
   - Metrics dashboard
   - Monthly evolution
   - Critical reduction trend
   - Scan scope (15 servers, 151 stations)

4. **Pentests** (Slides 18-19)
   - Application security testing
   - 8 applications assessed
   - 75 vulnerabilities found

5. **Action Plan** (Slides 20-25)
   - Completed tasks (9 items)
   - In progress (4 items)
   - Pending tasks (11 items)
   - Organized by priority

6. **Conclusion** (Slides 26-28)
   - Attention points
   - Contact information

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Function |
|----------|----------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `1-9` | Jump to section |
| `M` | Toggle minimap |
| `F` | Toggle fullscreen |
| `P` | Toggle presenter mode |
| `N` | Toggle speaker notes |
| `T` | Toggle theme |
| `?` | Show keyboard shortcuts |
| `Esc` | Exit fullscreen |

---

## 🎯 Features Deep Dive

### 🗺️ Advanced Navigation (Press `M`)

**Minimap Panel Features:**
- Visual overview of all 28 slides
- Organized by 6 sections with icons
- Progress tracking per section
- Quick jump to any slide
- Expandable thumbnail grid
- Beautiful glassmorphism design

### 🎤 Presenter Mode (Press `P`)

**Professional Presenter Tools:**
- **Timer:** 30-minute countdown with alerts
- **Speaker Notes:** Enhanced notes panel
- **Next Slide Preview:** See what's coming
- **Progress Tracking:** Stay on schedule
- **Controls:** Play/pause/reset timer

### 📊 Progress Indicators

**Multi-level Progress Tracking:**
- **Section Progress Bar:** 6 interactive segments
- **Breadcrumb:** Shows current section
- **Slide Counter:** Format 01/28
- **Percentage:** Overall completion
- **Visual Status:** Green/blue/gray indicators

---

## 🏗️ Tech Stack

### Core Technologies

- **Framework:** Next.js 16.0.6 (App Router)
- **UI Library:** React 19.2.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12.23.25

### UI Components

- **Icons:** Lucide React 0.555.0
- **Charts:** Recharts 2.15.4
- **Primitives:** Radix UI (Progress)
- **Styling Utilities:** CVA, clsx, tailwind-merge

### Design System

- **Colors:** Ness Design System
- **Fonts:** Inter (primary), Montserrat (secondary)
- **Components:** Custom Shadcn-style implementation

---

## 📁 Project Structure

```
Manesco/
├── app/
│   ├── presentation/
│   │   ├── page.tsx          # Main presentation (28 slides)
│   │   └── layout.tsx        # Protected layout
│   ├── login/
│   │   └── page.tsx          # Authentication
│   ├── api/auth/             # Auth endpoints
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # Base UI components
│   │   ├── badge.tsx
│   │   ├── progress.tsx
│   │   ├── stat-card.tsx
│   │   ├── alert.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── presentation/         # Presentation components
│       ├── executive-overview.tsx
│       ├── vulnerability-metrics.tsx
│       ├── improved-task-grid.tsx
│       ├── improved-pentest-grid.tsx
│       ├── enhanced-content-slide.tsx
│       ├── slide-minimap.tsx
│       ├── presenter-mode.tsx
│       ├── progress-indicator.tsx
│       ├── keyboard-shortcuts.tsx
│       └── slide-transition.tsx
├── lib/
│   ├── presentation-data.ts  # All presentation data
│   ├── auth.ts              # Auth helpers
│   └── utils.ts             # Utilities
└── tailwind.config.ts       # Tailwind + Ness theme
```

---

## 📊 Data Structure

All presentation data is centralized in `lib/presentation-data.ts`:

```typescript
// CIS Controls Data
- cisControls: 18 controls with metadata
- workedControls: 8 priority controls
- cisStatusData: Manesco vs Market reference
- currentMaturity: Maturity levels per control

// Evolution Data
- implementationEvolution: Dec/23 to Nov/25
- workedEvolution: Priority controls progress
- maturityEvolution: Maturity progression

// Vulnerability Data
- vulnerabilityEvolution: Monthly trends
- totalVulnerabilitiesTrend: By severity
- vulnerabilityScanScope: Assets monitored

// Pentest Data
- pentestApplications: 8 apps assessed
- pentestSummary: Consolidated results

// Tasks Data
- tarefas: 40+ tasks with progress
- tarefasPorStatus: Grouped by status

// Metadata
- pontosAtencao: 5 attention points
- presentationMetadata: Client info
```

---

## ⌨️ Keyboard Shortcuts

Every function is accessible via keyboard - press `?` to see all shortcuts in the presentation.

---

## 📄 License

This project is proprietary and confidential.

© 2025 Ness Digital Engineering - All rights reserved.

---

## 👥 Contact

**Mônica Yoshida**
ness.
myoshida@ness.com.br
+55 11 2504-7650

---

**Ready to present professionally!** 🚀
