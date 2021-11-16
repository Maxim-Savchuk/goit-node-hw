const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts.js");

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === Number(contactId));
    if (idx === -1) {
      return null;
    }
    const newContacts = contacts.filter((_, index) => index !== idx);
    await updateContacts(newContacts);
    return contacts[idx];
  } catch (error) {
    console.log(error);
  }
}

module.exports = removeContact;
