import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = currentContacts.concat(newContacts);

    await writeContacts(updatedContacts);

    console.log(`Added ${number} contacts`);
  } catch (err) {
    console.error('Error:', err);
  }
};

generateContacts(10);
