// import { useState } from 'react';
import WishList from '../components/WishList';
import AddWish from '../components/AddWish';
import { WishCardPropsType } from '../types';
import { useState } from 'react';
import Modal from '../components/UI/Modal/Modal';
import Button from '../components/UI/button/Button';

const Home = () => {
  const [wishes, setWishes] = useState<WishCardPropsType[]>([
    {
      id: 1,
      photo: 'https://ir.ozone.ru/s3/multimedia-1-i/wc1000/7718604318.jpg',
      title: 'Велоочки Rockbros',
      link: 'https://www.ozon.ru/product/ochki-sportivnye-solntsezashchitnye-polyarizatsionnye-dlya-vozhdeniya-ochki-velosipednye-muzhskie-i-2336304464/?at=57twEZW01cxWJ887IMl4M2wFwmkEwhynX6Vlu83L40W',
      category: 'Вело',
      comment: 'Чтобы не слепило в Карелии',
      priority: 3,
      isPublic: true,
    },
    {
      id: 2,
      photo:
        'https://bxuiiaeu1l.a.trbcdn.net/1dd/71t/qsp/928/gsw/4cw/soo/88c/c/1dd71tqsp928gsw4cwsoo88cc.jpg',
      title: 'Акустическая гитара',
      link: 'https://www.muztorg.ru/product/A186242',
      category: 'Музыка',
      comment: 'Для джемов у костра',
      priority: 2,
      isPublic: false,
    },
  ]);

  const [modal, setModal] = useState(false);

  const handleAddWish = (wish: WishCardPropsType) => {
    setWishes((prev) => [...prev, wish]);
    setModal(false);
  };

  return (
    <>
      <div className="top-row flex gap-14">
        <h2 className="font-bold text-2xl">Мой вишлист</h2>

        <Button
          className="border border-solid rounded-xl border-blue-600 text-blue-600 py-2 px-4"
          onClick={() => {
            setModal(true);
          }}
        >
          Добавить желание
        </Button>
      </div>
      {/* <AddWish onAdd={handleAddWish} /> */}
      <Modal visible={modal} setVisible={setModal}>
        <AddWish onAdd={handleAddWish} visible={modal} />
      </Modal>
      <WishList wishes={wishes} />
    </>
  );
};

export default Home;
