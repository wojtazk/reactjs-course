import { MongoClient } from 'mongodb';
import { MONGODB_URI } from './api-config'; // you need to make your own api-config file ;)

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (!req.method === 'POST')
    res.status(400).json({
      message: 'Bad request, you are only allowed to send POST requests!!!',
    });

  const data = req.body;

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const result = await meetupsCollection.insertOne(data);

  console.log(result);

  client.close();

  res.status(201).json({ message: 'Meetup inserted!' });
}

export default handler;
