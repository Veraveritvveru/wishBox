import WishCard from './WishCard/WishCard';
import { WishListProps } from '../types';

const WishList = ({ children, wishes }: WishListProps) => {
  return (
    <div className="wish-list flex gap-3 mt-4 flex-wrap">
      {wishes.map((wish) => (
        <WishCard key={wish.id} {...wish} />
      ))}
      {children}
    </div>
  );
};

export default WishList;
