# Health.AI: The Future of Personal & Global Health

Health.AI is a revolutionary health monitoring and epidemiological tracking platform designed to empower individuals with real-time health insights and provide medical professionals with advanced predictive tools. Built for the Microsoft Imagine Cup, this project leverages AI to bridge the gap between personal vitals and global disease prevention.

## 🌟 Vision
In an increasingly connected world, health is no longer just personal—it's communal. Health.AI aims to create a "Global Health Shield" by correlating individual smartwatch data with real-time regional disease spread. Our platform doesn't just track your health; it protects you based on your environment.

## 🚀 Key Features

### 1. Global Disease Tracker
*   **Real-time Spatial Visualization**: An interactive dark-mode map showing disease density (COVID-19, Influenza, Dengue, etc.) across the globe.
*   **Epidemiological Dataset**: A high-density "Excel-like" view for researchers to analyze regional logs and risk levels.
*   **Predictive Heatmaps**: Visualizes movement patterns of potential outbreaks.

### 2. Personal Health Suite (User Dashboard)
*   **Smartwatch Integration**: Live syncing of Heart Rate, Body Temperature, Sleep Quality, and Daily Activity.
*   **AI Exposure Risk**: A personalized risk assessment card that alerts you when specific outbreaks are detected within your immediate vicinity.
*   **Digital Physician (Dr. Gemini)**: AI-driven medical recommendations based on your metabolic trends and recovery patterns.

### 3. Clinical Specialist Portal (Doctor Portal)
*   **Intake Forecasting**: Statistical AI modeling that predicts patient surges over a 7-day period to optimize hospital resource allocation.
*   **Resource Management**: Inventory tracking for critical medicines, vaccines, and water purifiers with "Critically Low" automated alerts.
*   **Environmental Monitoring**: Real-time alerts for regional water quality and hygiene metrics.

### 4. Secure Role-Based Access
*   **Differentiated Authentication**: Specialized login flows for Patients and Medical Professionals.
*   **Protected Workspace**: Role-based routing ensures that clinical tools are only accessible by verified specialists.

## 🛠 Tech Stack

*   **Frontend**: React 18, TypeScript, Vite
*   **Styling**: Tailwind CSS (Lucide Icons, Framer Motion for animations)
*   **Visualization**: Recharts (Medical Analytics), Leaflet (Geospatial Mapping)
*   **State Management**: React Context API (Auth & Role Management)
*   **Design System**: Custom "True Black" Glassmorphism UI

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/VishuKalier2003/Microsoft-Imagine-Cup.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔐 Test Credentials
Use these to explore the different portals:
- **General User**: `user@health.ai` | `password`
- **Medical Doctor**: `doctor@health.ai` | `password`
