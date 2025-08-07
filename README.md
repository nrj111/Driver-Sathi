
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

## Screenshots  

### 🖼️ Screenshots  
**Detection Alert State**  
<img width="1103" height="621" alt="image" src="https://github.com/user-attachments/assets/69360965-0566-4bf8-bbfe-a617e9349e3b" />

**Detection Drowsy State** 
<img width="950" height="536" alt="image" src="https://github.com/user-attachments/assets/de15f0a2-ba77-4b96-8de8-4c97e7ce6efd" />

**Detection Sleeping State** 
<img width="950" height="536" alt="image" src="https://github.com/user-attachments/assets/fabc4a03-6bd7-4aad-af17-d41827fae09e" />



**Landing Page**  
<img width="1374" height="776" alt="Landing page" src="https://github.com/user-attachments/assets/de0b576c-ac01-44d4-b5a0-3bf4da3fe029" />
<img width="1374" height="776" alt="Landing page 2" src="https://github.com/user-attachments/assets/ae2e4de6-8370-4347-a44b-2349725f2dd6" />

 

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
git clone https://github.com/nrj111/Driver-Sathi.git
cd Driver-Sathi
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

> Built with ❤️ by **Neeraj Jalodiya** to keep roads safer and drivers more alert.
