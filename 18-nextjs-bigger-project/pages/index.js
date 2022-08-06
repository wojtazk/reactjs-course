import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

import { MONGODB_URI } from './api/api-config';

import Head from 'next/head';

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Another dummy web app" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  // get meetings data
  const client = await MongoClient.connect(MONGODB_URI);

  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetupsData = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetupsData.map((meetup) => {
        meetup.id = meetup._id.toString();
        delete meetup._id;

        return meetup;
      }),
    },
    revalidate: 10,
  };
}

// export function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export default HomePage;
