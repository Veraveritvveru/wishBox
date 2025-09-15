type WishCardPropsType = {
  id: number;
  photo: string;
  title: string;
  link: string;
  category: string;
  priority: number;
  comment?: string;
  isPublic: boolean;
};

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

      <h3 className="wish-title">{wishCardProps.title}</h3>
      <a
        href={wishCardProps.link}
        className="wish-link"
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
