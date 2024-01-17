const express = require("express");
const cors = require("cors");

const PORT = 8080;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))