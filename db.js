import { openDB } from 'idb';

const dbPromise = openDB('my-database', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('products')) {
      db.createObjectStore('products', { keyPath: 'id', autoIncrement: true });
    }
  },
});

export default dbPromise;
