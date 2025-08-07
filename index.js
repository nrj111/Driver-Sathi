const express = require("express");
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process");

const app = express();
const PORT = 5000;
let pythonProcess = null;

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// START Python script
app.get("/start", (req, res) => {
  if (pythonProcess) {
    return res.status(400).json({ status: "running", message: "Already running" });
  }

  const pythonExecutable = path.join(__dirname, "..", "python", "python.exe");
  const scriptPath = path.join(__dirname, "..", "DDSS.py");

  console.log("Launching:", pythonExecutable, scriptPath);

  pythonProcess = spawn(pythonExecutable, [scriptPath]);

  pythonProcess.stdout.on("data", (data) => console.log(`PYTHON: ${data}`));
  pythonProcess.stderr.on("data", (data) => console.error(`PYTHON ERR: ${data}`));
  pythonProcess.on("close", (code) => {
    console.log(`DDSS.py exited with code ${code}`);
    pythonProcess = null;
  });

  res.status(200).json({ status: "running", message: "Started successfully" });
});

// STOP Python script
app.get("/stop", (req, res) => {
  if (pythonProcess) {
    pythonProcess.kill("SIGTERM");
    pythonProcess = null;
    res.status(200).json({ status: "stopped", message: "Stopped successfully" });
  } else {
    res.status(400).json({ status: "stopped", message: "Not running" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
