import styles from './MeetupDetails.module.css';

const MeetupDetails = (props) => {
  return (
    <section className={styles.details}>
      <img src={props.image} alt={props.alt} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetails;
