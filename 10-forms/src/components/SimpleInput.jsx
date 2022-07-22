import useFormInput from '../hooks/useFormInput';

const SimpleInput = (props) => {
  const [
    enteredName,
    enteredNameModified,
    nameInputChangeHandler,
    nameInputBlurHandler,
    nameInputReset,
  ] = useFormInput();

  const [
    enteredEmail,
    enteredEmailModified,
    emailInputChangeHandler,
    emailInputBlurHandler,
    emailInputReset,
  ] = useFormInput();

  const enteredNameIsValid = enteredName.trim().length !== 0;
  const enteredEmailIsValid = enteredEmail.trim().includes('@');

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    nameInputReset();
    emailInputReset();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div
        className={`form-control ${
          !enteredNameIsValid && enteredNameModified && 'invalid'
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />

        {!enteredNameIsValid && enteredNameModified && (
          <p className="error-text">Entered name is not valid</p>
        )}
      </div>

      <div
        className={`form-control ${
          !enteredEmailIsValid && enteredEmailModified && 'invalid'
        }`}
      >
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />

        {!enteredEmailIsValid && enteredEmailModified && (
          <p className="error-text">Entered e-mail is not valid</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
