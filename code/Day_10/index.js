// const express = require('express')
// const ap = express()

// app.use((req,res,next)=>{
//     console.log("Middleware1")
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("Middleware2")
//     next()
// })

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

// app.listen(8080,()=>{
//     console.log('Server running....')
// })

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "GET, PUT, DELETE, POST",
};

app.use(cors(corsOptions));

//  Connect to MongoDB with recommended options
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => console.error(" MongoDB connection error:", err));

const empSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  salary: { type: Number, required: true },
});

const empModel = mongoose.model("employee", empSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET all employeee
app.get("/employee", async (req, res, next) => {
  try {
    const result = await empModel.find().exec();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// POST new employee
app.post("/employee", async (req, res, next) => {
  try {
    const employee = new empModel(req.body);
    const result = await employee.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

// GET employee by ID
// app.get("/employee/:id", async (req, res, next) => {
//   try {
//     console.log("Getting Employee with ID:", req.params.id);
//     const employee = await empModel.findById(req.params.id).exec();
//     console.log("Found employee:", employee);
//     if (!employee) {
//       return res.status(404).send("Employee not found");
//     }
//     res.json(employee);
//   } catch (error) {
//     next(error);
//   }
// });

app.get("/employee/:id", async (req, res, next) => {
  try {
    console.log("Getting Employee with ID:", req.params.id);
    const employee = await empModel
      .findOne({
        id: Number(req.params.id),
      })
      .exec();
    console.log("Found employee:", employee);
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    res.json(employee);
  } catch (error) {
    next(error);
  }
});

// PUT update employee by ID
// app.put("/employee/:id", async (req, res, next) => {
//   try {
//     console.log("Updating employee with ID:", req.params.id);
//     const employee = await empModel.findById(req.params.id).exec();
//     if (!employee) {
//       return res.status(404).send("Employee not found");
//     }
//     employee.set(req.body);
//     const result = await employee.save();
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// });

app.put("/empup/:id", async (req, res, next) => {
    try {
        // Find employee using MongoDB _id
        const employee = await empModel.findById(req.params.id).exec();

        if (!employee) {
            return res.status(404).send("Employee not found");
        }

        // Update employee fields
        employee.set(req.body);

        // Save updated employee
        const result = await employee.save();

        res.json(result);
    } catch (error) {
       console.error("PUT ERROR:", error);
        next(error);
    }
});

// DELETE  by ID
// app.delete("/employee/:id", async (req, res, next) => {
//   try {
//     const result = await empModel.deleteOne({ _id: req.params.id }).exec();
//     if (result.deletedCount === 0) {
//       return res.status(404).send("Employee not found");
//     }
//     res.send("Employee deleted successfully");
//   } catch (error) {
//     next(error);
//   }
// });

app.delete("/empdel/:id", async (req, res, next) => {
  try {
    const result = await empModel
      .deleteOne({
        id: Number(req.params.id),
      })
      .exec();
    if (result.deletedCount === 0) {
      return res.status(404).send("Employee not found");
    }
    res.send("Employee deleted successfully");
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ err: "Something went wrong!" });
});

// ------------------- SERVER -------------------
app.listen(8081, () => {
  console.log(" Server running at http://localhost:8081");
});
