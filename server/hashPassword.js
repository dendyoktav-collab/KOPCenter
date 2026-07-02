const bcrypt = require("bcrypt");

async function generatePassword() {
  const password = "admin123";

  const hash = await bcrypt.hash(password, 10);

  console.log("Password Asli :", password);
  console.log("Hash Password :", hash);
}

generatePassword();