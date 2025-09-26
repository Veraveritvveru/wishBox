import WishCard from '../WishCard/WishCard';
import MyButton from '../UI/button/MyButton';
import Modal from '../UI/Modal/Modal';
import AddWish from '../AddWish';
import { useState } from 'react';
import { WishCardPropsType, WishListProps } from '../../types';
import classes from './WishList.module.css';

const WishList = ({ wishes, onAdd }: WishListProps) => {
  const [modal, setModal] = useState(false);

  const addWish = (wish: WishCardPropsType) => {
    onAdd(wish);
    setModal(false);
  };
  // const [wishes, setWishes] = useState<WishCardPropsType[]>([]);

  // const handleAddWish = (wish: WishCardPropsType) => {
  //   // setWishes((prev) => [...prev, wish]);
  //   setWishes((prev) => {
  //     localStorage.setItem('wishes', JSON.stringify(wish));
  //     return [...prev, wish];
  //   });
  //   // localStorage.setItem('wishes', JSON.stringify(wish));
  //   console.log(localStorage);
  //   setModal(false);
  // };

  return (
    <div className={classes.wishListContainer}>
      <div className="top-row flex gap-14">
        <h2 className="font-bold text-2xl text-[#31B2015]">Мой вишлист</h2>

        <MyButton className="border border-solid rounded-xl border-blue-600 text-blue-600 py-2 px-4">
          Поделиться вишлистом
        </MyButton>
      </div>

      <div
        className={
          wishes.length > 0
            ? classes.wishList
            : [classes.wishList, classes.reverse].join(' ')
        }
      >
        {wishes.length > 0 ? (
          wishes.map((wish) => (
            <WishCard key={wish.id} {...wish} onEdit={() => setModal(true)} />
          ))
        ) : (
          <h1>Желаний пока нет...</h1>
        )}
        <div
          className="w-[272px] h-[378px] rounded-xl bg-gradient-to-b from-[#a4c281] to-[#576e3b] text-[#FFCFE4] text-9xl pt-[100px] text-center cursor-pointer"
          onClick={() => setModal(true)}
        >
          +
        </div>
      </div>

      <Modal visible={modal} setVisible={setModal}>
        <AddWish onAdd={addWish} visible={modal} />
      </Modal>
    </div>
  );
};

export default WishList;
