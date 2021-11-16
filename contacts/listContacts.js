const fs = require("fs").promises;
const contactsPath = require("./filePath.js");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = listContacts;
