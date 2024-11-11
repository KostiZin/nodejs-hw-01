import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const currentContacts = await readContacts();

    const newContacts = createFakeContact();

    const updatedContacts = [...currentContacts, newContacts];

    await writeContacts(updatedContacts);

    console.log(`Added one contact`);
  } catch (err) {
    console.error('Error:', err);
  }
};

addOneContact();
