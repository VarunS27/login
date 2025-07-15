const jwt = require("jsonwebtoken");

const USERS = [
  { email: "test@example.com", password: "123456" } // mock user
];

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = USERS.find(u => u.email === email && u.password === password);

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.json({ token });
};

exports.dashboard = (req, res) => {
  res.json({ message: "Welcome to the dashboard!" });
};
