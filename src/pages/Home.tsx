import WishList from '../components/WishList/WishList';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { FC, useState } from 'react';
import { WishCardPropsType } from '../types';
import WishModal from '../components/WishModal';
import ConfirmModal from '../components/ConfirmModal.tsx/ConfirmModal';
import { v4 as uuidv4 } from 'uuid';

const Home: FC = () => {
  const [wishes, setWishes] = useLocalStorage<WishCardPropsType[]>(
    'wishes',
    []
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [editingWish, setEditingWish] = useState<WishCardPropsType | null>(
    null
  );

  const [confirmConfig, setConfirmConfig] = useState<{
    message: string;
    onConfirm: () => void;
  } | null>(null);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const handleAdd = () => {
    setEditingWish(null);
    setModalVisible(true);
  };

  const handleEdit = (id: number | string) => {
    const wish = wishes.find((w: WishCardPropsType) => w.id === id) || null;
    setEditingWish(wish);
    setModalVisible(true);
  };

  const handleCopy = (id: number | string) => {
    const originalWish = wishes.find(
      (wish: WishCardPropsType) => wish.id === id
    );
    const newWish = { ...originalWish, id: uuidv4() };

    setWishes((prev: WishCardPropsType[]) => {
      return originalWish ? [...prev, newWish] : prev;
    });
  };

  const handleDelete = (id: number | string) => {
    setConfirmConfig({
      message: 'Точно хочешь удалить это желание?',
      onConfirm: () => {
        setWishes((wishes: WishCardPropsType[]) =>
          wishes.filter((wish) => wish.id !== id)
        );
      },
    });
    setConfirmVisible(true);
  };

  const handleSubmit = (wish: WishCardPropsType) => {
    setWishes((prev: WishCardPropsType[]) => {
      // editing
      if (prev.some((w) => w.id === wish.id)) {
        return prev.map((w) => (w.id === wish.id ? wish : w));
      }
      // add new
      return [...prev, wish];
    });
  };

  return (
    <div>
      <WishList
        wishes={wishes}
        onEdit={handleEdit}
        onAdd={handleAdd}
        onCopy={handleCopy}
        onDelete={handleDelete}
      />

      <WishModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        initialData={editingWish}
        onSubmit={handleSubmit}
      />

      <ConfirmModal
        visible={confirmVisible}
        message={confirmConfig?.message}
        confirmText="Да, удалить"
        cancelText="Нет, я передумал"
        onConfirm={() => {
          confirmConfig?.onConfirm();
          setConfirmVisible(false);
        }}
        onCancel={() => setConfirmVisible(false)}
      />
    </div>
  );
};

export default Home;
