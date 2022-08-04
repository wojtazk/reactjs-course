import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://picsum.photos/1920/1080',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup',
  },

  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://picsum.photos/1921/1081',
    address: 'Some address 8, 123 Some City',
    description: 'This is a second meetup',
  },

  // {
  //   id: 'm3',
  //   title: 'A 3rd Meetup',
  //   image: 'https://picsum.photos/1919/1079',
  //   address: 'Some address 2, 123 Some City',
  //   description: 'This is a 3rd meetup',
  // },
  // {
  //   id: 'm4',
  //   title: 'A 4th Meetup',
  //   image: 'https://picsum.photos/1920/1079',
  //   address: 'Some address 2, 123 Some City',
  //   description: 'This is a 4th meetup',
  // },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
