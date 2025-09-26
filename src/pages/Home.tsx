import WishList from '../components/WishList/WishList';
import { WishCardPropsType } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home = () => {
  const [wishes, setWishes] = useLocalStorage<WishCardPropsType[]>(
    'wishes',
    []
  );

  const handleAddWish = (wish: WishCardPropsType) => {
    setWishes((prev: WishCardPropsType[]) => [...prev, wish]);
  };
  return <WishList wishes={wishes} onAdd={handleAddWish} />;
};

export default Home;
