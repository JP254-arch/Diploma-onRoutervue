const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Absolute path to vehicles.json
const DATA_FILE = path.join(__dirname, "data", "vehicles.json");

// Helper: read vehicles
function readVehicles() {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read vehicles.json:", err);
    return [];
  }
}

// Helper: write vehicles
function writeVehicles(vehicles) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(vehicles, null, 2));
  } catch (err) {
    console.error("Failed to write vehicles.json:", err);
  }
}

// Get all vehicles
app.get("/vehicles", (req, res) => {
  const vehicles = readVehicles();
  res.json(vehicles);
});

// Add a vehicle
app.post("/vehicles", (req, res) => {
  try {
    const vehicles = readVehicles();
    const newVehicle = {
      id: vehicles.length + 1,
      title: req.body.title,
      description: req.body.description || "",
      price: req.body.price || 0,
      image: req.body.image
    };
    vehicles.push(newVehicle);
    writeVehicles(vehicles);
    console.log("Vehicle added:", newVehicle);
    res.status(201).json(newVehicle);
  } catch (err) {
    console.error("Failed to add vehicle:", err);
    res.status(500).send("Failed to add vehicle");
  }
});

// Update a vehicle
app.put("/vehicles/:id", (req, res) => {
  try {
    const vehicles = readVehicles();
    const id = parseInt(req.params.id);
    const index = vehicles.findIndex(v => v.id === id);
    if (index === -1) return res.status(404).send("Vehicle not found");

    vehicles[index] = {
      ...vehicles[index],
      title: req.body.title,
      description: req.body.description || vehicles[index].description,
      price: req.body.price || vehicles[index].price,
      image: req.body.image || vehicles[index].image
    };

    writeVehicles(vehicles);
    console.log("Vehicle updated:", vehicles[index]);
    res.json(vehicles[index]);
  } catch (err) {
    console.error("Failed to update vehicle:", err);
    res.status(500).send("Failed to update vehicle");
  }
});

// Delete a vehicle
app.delete("/vehicles/:id", (req, res) => {
  try {
    let vehicles = readVehicles();
    const id = parseInt(req.params.id);
    vehicles = vehicles.filter(v => v.id !== id);
    writeVehicles(vehicles);
    console.log("Vehicle deleted with ID:", id);
    res.sendStatus(204);
  } catch (err) {
    console.error("Failed to delete vehicle:", err);
    res.status(500).send("Failed to delete vehicle");
  }
});

// Start server
app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
