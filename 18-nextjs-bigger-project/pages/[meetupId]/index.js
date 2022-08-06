import { MongoClient, ObjectId } from 'mongodb';
import { MONGODB_URI } from '../api/api-config';

import Head from 'next/head';

import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupInfo = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails {...props.meetupData} />
    </>
  );
};

//////////////////////////////////
export async function getStaticPaths() {
  const client = await MongoClient.connect(MONGODB_URI);

  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetupsData = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetupsData.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(MONGODB_URI);

  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  // modify response object
  selectedMeetup.id = meetupId;
  delete selectedMeetup._id;
  //

  client.close();

  return {
    props: {
      meetupData: selectedMeetup,
    },
  };
}

export default MeetupInfo;
