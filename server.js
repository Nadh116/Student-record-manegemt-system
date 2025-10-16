const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/ER.JS");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/employees", employeeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
