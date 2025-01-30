import { openDB } from "idb";

// Initialize the database
const initdb = async () => {
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });
};

// Logic to save content to the database
export const putDb = async (content) => {
  console.log("PUT to the database");
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const result = await store.put({ id: 1, value: content });
  console.log("🚀 - data saved to the database", result);
};

// Logic to retrieve content from the database
export const getDb = async () => {
  console.log("GET from the database");
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const result = await store.get(1);
  console.log("🚀 - data retrieved from the database", result?.value);
  return result?.value;
};

// Initialize the database when this file is imported
initdb();
