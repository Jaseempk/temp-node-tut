const os = require("os");
const userInfo = os.userInfo;
const osResources = {
  totalMemory: os.totalmem,
  freeMemory: os.freemem,
  hostName: os.hostname,
  version: os.version,
};
