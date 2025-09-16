const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "code")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "index.html"));
});
app.post("/submit-delivery", (req, res) => {
  const data = req.body;
  const filePath = path.join(__dirname, "deliveryData.json");

  let existing = [];
  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath));
  }

  existing.push({
    name: data.name,
    address: data.address,
    phone: data.phone,
    product: data.product,
    date: new Date().toISOString()
  });

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  // ✅ send plain text instead of JSON
  res.send("✅ Delivery information saved successfully!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
