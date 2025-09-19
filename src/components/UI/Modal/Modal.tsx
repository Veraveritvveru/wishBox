import classes from './Modal.module.css';

type ModalProps = {
  children: JSX.Element;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, visible, setVisible }: ModalProps) => {
  const rootClasses = [classes.modal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
