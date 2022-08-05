import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupInfo = (props) => {
  return <MeetupDetails {...props.meetupData} />;
};

//////////////////////////////////
export function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
  };
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: 'https://picsum.photos/1920/1080',
        title: 'Firts meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup!!',
      },
    },
  };
}

export default MeetupInfo;
