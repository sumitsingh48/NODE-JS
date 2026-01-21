const fs = require("fs");
fs.writeFileSync(
  "secure.txt",
  "This is a secure file",
  { mode: 0o600 }   
);

console.log("Secure file created");
