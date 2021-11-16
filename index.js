const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.table(contacts);
        return contacts;

      case "get":
        const contact = await getContactById(id);
        if (!contact) {
          throw new Error(`Contact with id ${id} not found`);
        }
        console.table(contact);
        return contact;

      case "add":
        const newContact = await addContact(name, email, phone);
        console.table(newContact);
        return newContact;

      case "remove":
        const removedContact = await removeContact(id);
        console.table(removedContact);
        return removedContact;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error);
  }
}

invokeAction(argv);
