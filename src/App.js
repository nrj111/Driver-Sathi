import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import show from './assets/show.jpg';


function App() {
  const [running, setRunning] = useState(false);

  const handleToggle = () => {
    if (running) {
      toast.info('Stopping Drowsiness Detection...');
    } else {
      toast.success('Starting Drowsiness Detection...');
    }

    fetch(`http://localhost:5000/${running ? 'stop' : 'start'}`)
      .then(() => setRunning(!running))
      .catch((error) => {
        toast.error("Failed to connect to backend");
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-2">Driver Drowsiness Detection System</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A smart real-time AI-powered system to monitor and prevent drowsy driving using face and eye detection.
        </p>
      </header>

      <section className="grid lg:grid-cols-2 gap-10 items-center mb-14">
        <img
          src={show}
          alt="System working"
          className="rounded-2xl shadow-xl w-full"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why This Matters?</h2>
          <ul className="space-y-3 text-gray-300 list-disc pl-5">
            <li>Real-time alerting with audio and visual signals</li>
            <li>Reduces road accidents due to driver fatigue</li>
            <li>Monitors eye closure, yawns, and head tilts using 68-point face landmarks</li>
            <li>Lightweight Python backend with OpenCV, Dlib & SciPy</li>
            <li>Affordable and scalable to integrate into vehicles</li>
          </ul>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-3xl font-semibold text-center mb-6">Technologies Used</h2>
        <div className="flex flex-wrap justify-center gap-6 text-center text-gray-200">
          <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-md">Python</div>
          <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-md">OpenCV</div>
          <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-md">Dlib</div>
          <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-md">React</div>
          <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-md">Tailwind CSS</div>
          <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-md">Express JS</div>
        </div>
      </section>

      <div className="flex justify-center">
        <button
          onClick={handleToggle}
          className={`px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ${
            running ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {running ? 'Stop Demo' : 'Start Demo'}
        </button>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
