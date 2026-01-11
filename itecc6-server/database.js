const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Expense = require("./models/expense");
const User = require("./models/user");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB
mongoose
  .connect("mongodb+srv://shingenshino_db_user:kBWegPDXXTNK0g0Y@cluster0.mxtifkk.mongodb.net/expensesDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Root
app.get("/", (req, res) => {
  res.send("Expense Tracker Backend is running");
});

/* ======================
   EXPENSES CRUD
====================== */

app.get("/expenses", async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1 });
  res.json(expenses);
});

app.post("/expenses", async (req, res) => {
  const expense = new Expense(req.body);
  const saved = await expense.save();
  res.status(201).json(saved);
});

app.put("/expenses/:id", async (req, res) => {
  const updated = await Expense.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

app.delete("/expenses/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

/* ======================
   USERS CRUD
====================== */

app.get("/users", async (req, res) => {
  const users = await User.find().sort({ joined: -1 });
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  const saved = await user.save();
  res.status(201).json(saved);
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
