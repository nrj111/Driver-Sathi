
# 🚗 Driver Sathi – Drowsiness Detection System  
**_Stay Awake, Stay Alive – Let Driver Sathi Watch Over You._**

Driver Sathi is an intelligent real-time monitoring tool that helps detect driver drowsiness by analyzing blink patterns and facial landmarks using a standard webcam. It’s designed to prevent accidents by providing timely visual alerts, ensuring enhanced road safety for all.

## 📑 Contents
- [Features](#features)
- [Video and Screenshots](#video-and-screenshots)
- [How it Works](#how-it-works)
- [Responsiveness & Accessibility](#responsiveness--accessibility)
- [Installation & Usage](#installation--usage)
- [Tech Stack](#tech-stack)
- [Libraries Used](#libraries-used)

## ✨ Features
- Real-time drowsiness detection using blink ratios and eye landmark tracking  
- Visual alerts: "Active", "Drowsy", and "Sleeping" states displayed dynamically  
- Toggle-based interface to Start/Stop detection directly from the browser  
- Seamless Windows `.exe` bundling with embedded Python and Node backend  
- Responsive UI with clean visuals and demo section  
- Downloadable, offline-run enabled through a single `.exe` installer

## 🎥 Video and Screenshots
### 🔗 Teaser Demo  
Watch a short teaser of Driver Sathi in action: [Teaser Video (YouTube)](https://example.com)  

### 🖼️ Screenshots  
**Detection Alert State**  
![detection](assets/screenshot-detection.png)  
**Landing Page**  
![landing](assets/screenshot-landing.png)  

## ⚙️ How it Works
Driver Sathi consists of three integrated components:
1. **Python Detection Engine:** Uses OpenCV and dlib to detect eye closure patterns in real-time.
2. **React Frontend:** Provides a UI with a "Run Demo" button and live state feedback.
3. **Node.js Backend:** Manages the Python script and serves the frontend.

> Webcam access requires local execution due to browser restrictions.

## 📱 Responsiveness & Accessibility
- Fully responsive across devices  
- Built with Tailwind CSS for a scalable and modern UI  
- Visual status indicators with toast notifications

## 🧪 Installation & Usage
### 🔧 Requirements
- Python 3.10, Node.js 18+, Git (optional), Windows OS

### 💻 Local Development
```bash
git clone https://github.com/yourusername/driver-sathi.git
cd driver-sathi
cd app/backend && npm install
cd ../frontend && npm install && npm run build
cd ../backend && node index.js
```
Visit: [http://localhost:5000](http://localhost:5000)

### 🖥️ Run via `.exe`
Bundle Python, Node backend, frontend build, and use `pkg` to create `.exe`.

## 💻 Tech Stack
| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | React.js, Tailwind CSS        |
| Backend   | Node.js, Express.js           |
| Detection | Python, OpenCV, dlib, imutils |
| Packaging | pkg, Batch script             |

## 📚 Libraries Used
- OpenCV, dlib, imutils
- React, Tailwind CSS, express, pkg
- react-toastify

## 👥 About Driver Sathi
Created as a minor project to showcase computer vision + full-stack integration for real-world applications.

> Built with ❤️ to keep roads safer and drivers more alert.
