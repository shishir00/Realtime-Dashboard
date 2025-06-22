# Dashboard UI with Real-Time Data Synchronization

A responsive dashboard application built with Next.js and TypeScript that synchronizes user data changes with Firebase Realtime Database in real-time. The dashboard displays "Hot List" and "New List" data with instant updates across all connected clients.

##  Features

- **Real-time Data Synchronization**: Instant updates using Firebase Realtime Database
- **Responsive Design**: Optimized for desktop and mobile devices
- **Hot List & New List Management**: Dynamic data display and management
- **TypeScript Support**: Type-safe development with Next.js
- **Modern UI**: Clean and intuitive dashboard interface

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+ with TypeScript
- **Database**: Firebase Realtime Database
- **Styling**: [custom CSS]
- **Authentication**: Firebase Auth (if implemented)

##  Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git**

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shishir00/Realtime-Dashboard
cd Realtime-Dashboard/Dashboard
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```
### 3. Firebase Configuration

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project" and follow the setup wizard
   - Enable Firebase Realtime Database in your project

2. **Set up Firebase Realtime Database**:
   - In the Firebase console, navigate to "Realtime Database"
   - Click "Create Database"
   - Choose your security rules (start in test mode for development)

3. **Get Firebase Configuration**:
   - Go to Project Settings → General → Your apps
   - Click on "Web app" and register your app
   - Copy the Firebase configuration object

4. **Environment Variables**:
   Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project_id-default-rtdb.firebaseio.com/
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Initialize Sample Data (Optional)

If you want to populate your database with sample data, you can manually add the following structure to your Firebase Realtime Database:

```json
{
  "hotList": {
    "item1": {
      "name": "BTC/INR",
      "price": 4504624.2,
      "change": "-0.47%",
      "icon": "https://cryptologos.cc/logos/bitcoin-btc-logo.png"
    },
    "item2": {
      "name": "ETH/INR",
      "price": 265000,
      "change": "2.10%",
      "icon": "https://cryptologos.cc/logos/ethereum-eth-logo.png"
    },
    "item3": {
      "name": "BNB/INR",
      "price": 33568.03,
      "change": "0.02%",
      "icon": "https://cryptologos.cc/logos/bnb-bnb-logo.png"
    }
  },
  "newList": {
    "item1": {
      "name": "ADA/INR",
      "price": 45.12,
      "change": "-0.85%",
      "icon": "https://cryptologos.cc/logos/cardano-ada-logo.png"
    },
    "item2": {
      "name": "DOT/INR",
      "price": 476.45,
      "change": "1.95%",
      "icon": "https://cryptologos.cc/logos/polkadot-new-dot-logo.png"
    },
    "item3": {
      "name": "MATIC/INR",
      "price": 73.21,
      "change": "0.64%",
      "icon": "https://cryptologos.cc/logos/polygon-matic-logo.png"
    }
  }
}
```

##  Running the Application

### Development Mode

```bash
npm run dev
```




The application will be available at [http://localhost:3001/dashboard](http://localhost:3001/dashboard)

### Production Build

```bash
npm run build
npm start
```



## 📱 Testing Real-Time Functionality

To test the real-time synchronization:

1. **Open Multiple Browser Windows**: Open the dashboard in multiple browser tabs or windows
2. **Modify Data**: Go to your Firebase Console → Realtime Database
3. **Edit Data**: Change any values in the "hotList" or "newList" nodes
4. **Observe Changes**: You should see the changes reflected instantly in all open browser windows

##  Project Structure

```
DASHBOARD/
├── .next/
├── app/
│   ├── dashboard/
│   │   ├── dashboard.css
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ListDisplay.css
│   ├── ListDisplay.tsx
│   ├── Navbar.css
│   └── navbar.tsx
├── lib/
│   ├── dataHooks.ts
│   ├── firebase.ts
│   └── useMarketOverviewFromHotList.ts
├── node_modules/
├── public/
├── types/
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## 🔧 Configuration Files

### Firebase Configuration (`lib/firebase.ts`)
This file contains the Firebase initialization and configuration.

### Data Hooks (`lib/dataHooks.ts`)
Custom React hooks for managing real-time data synchronization with Firebase.

### Components
- **ListDisplay**: Component for displaying hot list and new list data
- **Navbar**: Navigation component for the dashboard

## 🎯 Key Features Explained

### Real-Time Data Synchronization
The application uses Firebase Realtime Database listeners to automatically update the UI when data changes. This ensures that all connected clients see the same data instantly.

### Responsive Design
The dashboard is built with responsive design principles, ensuring optimal viewing experience across different devices and screen sizes.

### TypeScript Integration
Full TypeScript support provides type safety and better development experience with IntelliSense and compile-time error checking.

## 🎥 Demo Video

https://drive.google.com/file/d/1VASZ5k2GXs0EY4h7Wfh11J-8f3aAqME5/view?usp=sharing
