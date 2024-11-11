import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);

    console.log('All contacts are removed');
  } catch (err) {
    console.error('Error:', err);
  }
};

removeAllContacts();
