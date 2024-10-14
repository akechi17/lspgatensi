const ftp = require("ftp");

const uploadFileToFtp = async (filePath, ftpConfig) => {
  const client = new ftp();

  return new Promise((resolve, reject) => {
    client.on("ready", () => {
      client.put(filePath, "/", (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
        client.end();
      });
    });

    client.connect(ftpConfig);
  });
};

module.exports = {
  uploadFileToFtp,
};
