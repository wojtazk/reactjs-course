// /api/new-meetup

import { MongoClient } from 'mongo';
import { MONGODB_URL } from './api-config'; // this file is not included ;), make your own

async function handler(req, res) {
  if (!req.method === 'POST') return;

  const data = req.body;

  //   const { title, image, address, description } = data;

  const client = await MongoClient.connect(MONGODB_URL);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const result = await meetupsCollection.insertOne(data);
  console.log(result);

  client.close();

  res.status(201).json({ message: 'Meetup inserted!' });
}

export default handler;
