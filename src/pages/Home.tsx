// import { useState } from 'react';
import WishList from '../components/WishList';

const Home = () => {
  const wishes = [
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
  ];
  // const [wishes, setWishes] = useState();

  return (
    <>
      <WishList wishes={wishes} />
    </>
  );
};

export default Home;
