import WishCard from '../WishCard/WishCard';
import MyButton from '../UI/button/MyButton';
import { WishListProps } from '../../types';
import classes from './WishList.module.css';

const WishList = ({
  wishes,
  onEdit,
  onAdd,
  onCopy,
  onDelete,
}: WishListProps) => {
  return (
    <div className={classes.wishListContainer}>
      <div className={classes.topRow}>
        <h2>Мой вишлист</h2>

        <MyButton className="border border-solid rounded-xl border-blue-600 text-blue-600 py-2 px-4">
          Поделиться вишлистом
        </MyButton>
      </div>

      <div
        className={
          wishes.length
            ? classes.wishList
            : [classes.wishList, classes.reverse].join(' ')
        }
      >
        {wishes.length ? (
          wishes.map((wish) => (
            <WishCard
              key={wish.id}
              {...wish}
              onEdit={onEdit}
              onCopy={onCopy}
              onDelete={onDelete}
            />
          ))
        ) : (
          <h1>Желаний пока нет...</h1>
        )}
        <div className={classes.addWishButton} onClick={onAdd}>
          +
        </div>
      </div>
    </div>
  );
};

export default WishList;
