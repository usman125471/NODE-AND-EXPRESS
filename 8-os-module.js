const os = require("os");

// INFO ABOUT CURRENT USER \\
const user = os.userInfo();
console.log(user);

// method system uptime in seconds \\
console.log(`my system uptime is ${os.uptime()} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
