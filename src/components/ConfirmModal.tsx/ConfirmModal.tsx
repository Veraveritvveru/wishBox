import classes from './ConfirmModal.module.css';
import { FC } from 'react';

type ConfirmModalProps = {
  visible: boolean;
  message: string | undefined;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal: FC<ConfirmModalProps> = ({
  visible,
  message,
  confirmText = 'OK',
  cancelText = 'Отмена',
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;

  return (
    <div className={classes.confirmModal}>
      <div className={classes.confirmContent}>
        <p className={classes.confirmMessage}>{message}</p>
        <div className={classes.confirmButtons}>
          <button className={classes.btnBordered} onClick={onConfirm}>
            {confirmText}
          </button>
          <button className={classes.btnColored} onClick={onCancel}>
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
