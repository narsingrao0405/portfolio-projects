# Portfolio Projects

A modern React portfolio website showcasing my full-stack development projects with interactive screenshot galleries.

## 🚀 Features

- **Interactive Screenshot Galleries**: Each project includes a carousel/gallery component with auto-play functionality
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive layouts
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Accessibility**: Proper alt text, keyboard navigation, and ARIA labels
- **TypeScript**: Full type safety throughout the application
- **Modular Components**: Reusable `ScreenshotGallery` component for consistent presentation

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite for fast development and optimized builds
- **Icons**: Lucide React for consistent iconography
- **Code Quality**: ESLint for linting and code standards

## 📱 Projects Showcased

### 1. SyncomDesk

A comprehensive customer support and ticket management system with multi-channel communication capabilities.

**Technologies**: React, Node.js, Express, MongoDB, Socket.io

**Key Features**:

- Multi-channel support (Email, WhatsApp, Chat)
- Ticket management and escalation
- Real-time dashboard with analytics
- Department-wise routing

### 2. CallMint BCT

A Business Communication Tool for managing customer interactions and route optimization.

**Technologies**: React, Node.js, MySQL, Express

**Key Features**:

- Customer management system
- Route planning and optimization
- Bulk customer upload functionality
- Audience segmentation

### 3. ClingApp

A social networking application focused on connecting people with shared interests.

**Technologies**: React Native, Firebase, Node.js

**Key Features**:

- User profiles and authentication
- Real-time messaging
- Interest-based matching
- Location-based services

### 4. License Manager

A comprehensive software license management system for tracking and managing software licenses.

**Technologies**: Java, Spring Boot, MySQL, Angular

**Key Features**:

- License tracking and monitoring
- Automated renewal reminders
- Usage analytics and reporting
- Multi-tenant support

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/narsingrao0405/portfolio-projects.git
   cd portfolio-projects
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
portfolio-projects/
├── public/                 # Static assets
│   ├── SyncomDesk/
│   │   └── screenshots/    # SyncomDesk project screenshots
│   ├── callmintBCT/
│   │   └── screenshots/    # CallMint BCT project screenshots
│   ├── ClingApp/
│   │   └── screenshots/    # ClingApp project screenshots (coming soon)
│   └── LicenseManager/
│       └── screenshots/    # License Manager screenshots (coming soon)
├── src/
│   ├── components/
│   │   ├── ScreenshotGallery.tsx  # Reusable gallery component
│   │   └── ProjectCard.tsx        # Individual project display
│   ├── data/
│   │   └── projects.ts            # Project configuration and metadata
│   ├── App.tsx             # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles with Tailwind
├── package.json
└── README.md
```

## 🎨 Screenshot Gallery Features

The `ScreenshotGallery` component provides:

- **Auto-play carousel**: Automatically cycles through screenshots every 4 seconds
- **Manual navigation**: Click arrows or thumbnails to navigate
- **Full-screen modal**: Click the zoom icon or image to view in full size
- **Responsive thumbnails**: Navigate quickly using thumbnail previews
- **Keyboard accessible**: Full keyboard navigation support
- **Error handling**: Graceful fallback for missing images

## 📸 Adding New Screenshots

To add screenshots for a new project:

1. Create a folder structure: `public/{ProjectName}/screenshots/`
2. Add your screenshot files to this folder
3. Update the project configuration in `src/data/projects.ts`:
   ```typescript
   {
     id: 'your-project',
     name: 'Your Project Name',
     screenshotFolder: 'ProjectName',
     screenshots: [
       'screenshot1.png',
       'screenshot2.png',
       // ... more screenshots
     ],
     // ... other project details
   }
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Email**: narsingrao0405@gmail.com
- **GitHub**: [@narsingrao0405](https://github.com/narsingrao0405)
- **LinkedIn**: [narsingrao0405](https://linkedin.com/in/narsingrao0405)

---

⭐ Star this repository if you found it helpful!
