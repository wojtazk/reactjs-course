import ReactDOM from 'react-dom';

import Button from './Button';
import Card from './Card';

import style from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onCloseModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onCloseModal}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
