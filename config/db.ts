import mongoose from 'mongoose';

async function connectDb(url: string) {
  mongoose.set('strictQuery', true);
  mongoose.set('strictPopulate', false);
  try {
    const connect = await mongoose.connect(url);
    
    console.log(`Connection to database ${connect.connection.name} is successful!`);
  } catch (err) {
    console.log('Could not connect to database!');
    throw err;
  }
}

export default connectDb;
