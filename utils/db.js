import mongoose, { connections } from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('Already Connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }

    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connections.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connections.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}

function convertDocToObject(doc) {
  let newDoc = {};

  newDoc._id = doc._id.toString();
  if (doc.year) newDoc.year = doc.year.toString();
  newDoc.createdAt = doc.createdAt.toString();
  newDoc.updatedAt = doc.updatedAt.toString();

  return { ...doc, ...newDoc };
}

const db = {
  connect,
  disconnect,
  convertDocToObject,
};

export default db;
