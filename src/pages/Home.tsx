import WishList from '../components/WishList/WishList';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { FC, useState } from 'react';
import { WishCardPropsType } from '../types';
import WishModal from '../components/WishModal';

const Home: FC = () => {
  const [wishes, setWishes] = useLocalStorage<WishCardPropsType[]>(
    'wishes',
    []
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [editingWish, setEditingWish] = useState<WishCardPropsType | null>(
    null
  );

  const handleAdd = () => {
    setEditingWish(null);
    setModalVisible(true);
  };

  const handleEdit = (id: number | string) => {
    const wish = wishes.find((w: WishCardPropsType) => w.id === id) || null;
    setEditingWish(wish);
    setModalVisible(true);
  };

  const handleDelete = (id: number | string) => {
    setWishes((wishes: WishCardPropsType[]) =>
      wishes.filter((wish) => wish.id !== id)
    );
    console.log(wishes);
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
        onDelete={handleDelete}
      />

      <WishModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        initialData={editingWish}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Home;
