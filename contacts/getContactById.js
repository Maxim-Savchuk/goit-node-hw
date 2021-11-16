const listContacts = require("./listContacts.js");

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === Number(contactId));
    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getContactById;
