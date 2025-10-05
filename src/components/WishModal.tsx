import { WishCardPropsType } from '../types';
import Modal from './UI/Modal/Modal';
import WishForm from './WishForm';
import { FC } from 'react';

type WishModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (wish: WishCardPropsType) => void;
  initialData?: WishCardPropsType | null;
};

const WishModal: FC<WishModalProps> = ({
  visible,
  onClose,
  onSubmit,
  initialData,
}) => {
  return (
    <Modal visible={visible} setVisible={onClose}>
      <WishForm
        initialData={initialData ?? undefined}
        onSubmit={(wish) => {
          onSubmit(wish);
          onClose();
        }}
      />
    </Modal>
  );
};

export default WishModal;
