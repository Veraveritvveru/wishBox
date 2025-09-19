import { WishCardPropsType } from '../types';

const WishCard = (wishCardProps: WishCardPropsType) => {
  return (
    <div className="wish-card border rounded p-4 shadow bg-white w-50">
      <div className="img-wrapper w-40">
        <img
          className="w-full"
          src={wishCardProps.photo}
          alt={wishCardProps.title}
        />
      </div>

      <h3 className="wish-title font-bold">{wishCardProps.title}</h3>
      <a
        href={wishCardProps.link}
        className="text-blue-700 font-medium"
        target="_blank"
        rel="noreferrer"
      >
        Купить
      </a>
      <p className="wish-category">{wishCardProps.category}</p>
      <p className="text-yellow-600">⭐ {wishCardProps.priority}</p>
      <p className="mt-2">{wishCardProps.comment}</p>
      <p>{wishCardProps.isPublic ? '🌍 Публично' : '🔒 Приватно'}</p>
    </div>
  );
};

export default WishCard;
