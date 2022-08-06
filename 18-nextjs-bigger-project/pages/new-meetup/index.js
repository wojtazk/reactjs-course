import { useRouter } from 'next/router';
import Head from 'next/head';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetup) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetup),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    console.log(data);

    router.push('/');
  };
  return (
    <>
      <Head>
        <title>Add new meetup</title>
        <meta name="description" content="Add another meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
