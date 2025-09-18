import WishCard from './WishCard';
import { WishListProps } from '../types';
// import Button from './UI/button/Button';
import { Link } from 'react-router-dom';

const WishList = ({ wishes }: WishListProps) => {
  return (
    <>
      <div className="top-row flex gap-14">
        <h2 className="font-bold text-2xl">Мой вишлист</h2>
        <Link
          to="addWish"
          className="border border-solid rounded-xl border-blue-600 text-blue-600 py-2 px-4"
        >
          Добавить желание
        </Link>
      </div>

      <div className="wish-list flex gap-3 mt-4">
        {wishes.map((wish) => (
          <WishCard key={wish.id} {...wish} />
        ))}
      </div>
    </>
  );
};

export default WishList;
