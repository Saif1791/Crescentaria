import { MongoClient } from "mongodb";
import "dotenv/config";
const uri = process.env.MONGO;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function updateDocuments() {
  try {
    await client.connect();
    const database = client.db("test"); // Change to your database
    const collection = database.collection("fooditems"); // Change to your collection

    // Add a new field with a default value to all documents
    const updateResult = await collection.updateMany(
      {},
      { $set: { provider: "Main Canteen" } } // Adds newField with a default value
    );

    console.log(`Updated ${updateResult.modifiedCount} documents`);
  } catch (error) {
    console.error("Error updating documents:", error);
  } finally {
    await client.close();
  }
}

updateDocuments();
