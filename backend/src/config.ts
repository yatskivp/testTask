import mongoose from 'mongoose';
import 'dotenv/config';

import { ConnectToDb } from './products-api/types.js';

export const connectToDb: ConnectToDb = () => {
  const dbUser = process.env.MONGODB_USER;
  const dbUserPass = process.env.MONGODB_USER_PASS;
  const dbName = process.env.MONGODB_NAME;

  return mongoose.connect(
    `mongodb+srv://${dbUser}:${dbUserPass}@studycluster.bhl3e.mongodb.net/?retryWrites=true&w=majority&appName=StudyCluster`,
    { dbName, autoCreate: true },
  );
};

export const SERVER_PORT = process.env.SERVER_PORT || 8080;
