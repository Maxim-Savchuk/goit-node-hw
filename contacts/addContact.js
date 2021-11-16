const { v4 } = require("uuid");
const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts.js");

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: v4(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

module.exports = addContact;
