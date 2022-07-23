import { useRef, useState } from 'react';
import classes from './CheckoutForm.module.css';

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length === 5;

const CheckoutForm = (props) => {
  const [inputValidity, setInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const clinetInfo = {
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      postal: postalCodeInputRef.current.value,
      city: cityInputRef.current.value,
    };

    const clientInfoValidation = {
      name: !isEmpty(clinetInfo.name),
      street: !isEmpty(clinetInfo.street),
      postal: isFiveChars(clinetInfo.postal),
      city: !isEmpty(clinetInfo.city),
    };

    setInputValidity({ ...clientInfoValidation });

    let formIsValid = true;
    for (const key in clientInfoValidation)
      if (!clientInfoValidation[key]) formIsValid = false;

    if (!formIsValid) {
      return;
    }

    // submiting data
    console.log(clinetInfo);
    props.onCancel();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !inputValidity.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!inputValidity.name && <p>Invalid name</p>}
      </div>

      <div
        className={`${classes.control} ${
          !inputValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!inputValidity.street && <p>Invalid street</p>}
      </div>

      <div
        className={`${classes.control} ${
          !inputValidity.postal && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!inputValidity.postal && <p>Invalid postal code</p>}
      </div>

      <div
        className={`${classes.control} ${
          !inputValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!inputValidity.city && <p>Invalid city</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
