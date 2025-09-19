import WishCard from './WishCard';
import { WishListProps } from '../types';

const WishList = ({ wishes }: WishListProps) => {
  return (
    <div className="wish-list flex gap-3 mt-4 flex-wrap">
      {wishes.map((wish) => (
        <WishCard key={wish.id} {...wish} />
      ))}
    </div>
  );
};

export default WishList;
