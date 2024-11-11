import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const currentContacts = await readContacts();

    if (currentContacts.length === 0) {
      return console.log('Your contact list is empty');
    }

    const updatedContacts = currentContacts.slice(0, -1);
    await writeContacts(updatedContacts);
    console.log(`The contact has been removed`);
  } catch (err) {
    console.error('Error:', err);
  }
};

removeLastContact();
