import useFormInput from '../hooks/useFormInput';

const BasicForm = (props) => {
  const [
    enteredNameValue,
    enteredNameValueModified,
    enteredNameChangeHandler,
    enteredNameBlurHandler,
    enteredNameReset,
  ] = useFormInput();
  const enteredNameIsValid = enteredNameValue.trim().length !== 0;
  const enteredNameHasErrors = !enteredNameIsValid && enteredNameValueModified;

  const [
    enteredLastNameValue,
    enteredLastNameValueModified,
    enteredLastNameChangeHandler,
    enteredLastNameBlurHandler,
    enteredLastNameReset,
  ] = useFormInput();
  const enteredLastNameIsValid = enteredLastNameValue.trim().length !== 0;
  const enteredLastNameHasErrors =
    !enteredLastNameIsValid && enteredLastNameValueModified;

  const [
    enteredEmailValue,
    enteredEmailValueModified,
    enteredEmailChangeHandler,
    enteredEmailBlurHandler,
    enteredEmailReset,
  ] = useFormInput();
  const enteredEmailIsValid = enteredEmailValue.includes('@');
  const enteredEmailHasErrors =
    !enteredEmailIsValid && enteredEmailValueModified;

  let formIsValid =
    enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(enteredNameValue);
    console.log(enteredLastNameValue);
    console.log(enteredEmailValue);

    enteredNameReset();
    enteredLastNameReset();
    enteredEmailReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={`form-control ${enteredNameHasErrors && 'invalid'}`}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={enteredNameValue}
            onChange={enteredNameChangeHandler}
            onBlur={enteredNameBlurHandler}
          />
          {enteredNameHasErrors && (
            <p className="error-text">Invalid First Name</p>
          )}
        </div>

        <div
          className={`form-control ${enteredLastNameHasErrors && 'invalid'}`}
        >
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastNameValue}
            onChange={enteredLastNameChangeHandler}
            onBlur={enteredLastNameBlurHandler}
          />
          {enteredLastNameHasErrors && (
            <p className="error-text">Invalid Last Name</p>
          )}
        </div>
      </div>

      <div className={`form-control ${enteredEmailHasErrors && 'invalid'}`}>
        <label htmlFor="mail">E-Mail Address</label>
        <input
          type="email"
          id="mail"
          value={enteredEmailValue}
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
        />
        {enteredEmailHasErrors && <p className="error-text">Invalid E-mail</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
