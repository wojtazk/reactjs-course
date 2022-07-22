import { useCallback, useState } from 'react';

/**
 *
 * @returns [inputValue, inputValueModified, inputChangeHandler, inputBlurHandler, inputReset]
 */
const useFormInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValueModified, setInputValueModified] = useState(false);

  const inputChangeHandler = useCallback(
    (event) => setInputValue(event.target.value),
    []
  );

  const inputBlurHandler = useCallback(
    (event) => setInputValueModified(true),
    []
  );

  const inputReset = () => {
    setInputValue('');
    setInputValueModified(false);
  };

  return [
    inputValue,
    inputValueModified,
    inputChangeHandler,
    inputBlurHandler,
    inputReset,
  ];
};

export default useFormInput;
