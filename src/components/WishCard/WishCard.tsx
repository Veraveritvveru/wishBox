import { WishCardPropsType } from '../../types';
import classes from './WishCard.module.css';

const WishCard = (wishCardProps: WishCardPropsType) => {
  return (
    <div className={classes.wishCard}>
      <div className="relative flex gap-2 items-center min-h-14">
        <span className="material-symbols-outlined">
          {wishCardProps.isPublic ? 'lock_open' : 'lock'}
        </span>
        <h3 className="font-medium">{wishCardProps.title}</h3>

        <div className={classes.optionsWrapper}>
          <button className={classes.options}>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
          </button>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className={classes.imgWrapper}>
          <img
            className={classes.image}
            src={wishCardProps.photo}
            alt={wishCardProps.title}
          />
        </div>
        {/* <p className="text-yellow-600">⭐ {wishCardProps.priority}</p> */}
        <div className="flex flex-col gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
          >
            <path
              stroke="#FFCFE4"
              strokeWidth="2"
              d="M11.81 2.105c.354-1.191 2.042-1.191 2.396 0l1.461 4.91a2.751 2.751 0 0 0 2.636 1.966h5.08c1.183 0 1.703 1.494.775 2.23l-4.4 3.49a2.75 2.75 0 0 0-.928 2.94l1.609 5.404c.348 1.17-1.017 2.095-1.975 1.336l-3.747-2.972a2.75 2.75 0 0 0-3.418 0L7.552 24.38c-.957.759-2.323-.165-1.975-1.336l1.609-5.405a2.75 2.75 0 0 0-.927-2.94l-4.401-3.49c-.928-.735-.408-2.229.776-2.229h5.078a2.75 2.75 0 0 0 2.636-1.966l1.462-4.91Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
          >
            <path
              stroke="#FFCFE4"
              strokeWidth="2"
              d="M11.81 2.105c.354-1.191 2.042-1.191 2.396 0l1.461 4.91a2.751 2.751 0 0 0 2.636 1.966h5.08c1.183 0 1.703 1.494.775 2.23l-4.4 3.49a2.75 2.75 0 0 0-.928 2.94l1.609 5.404c.348 1.17-1.017 2.095-1.975 1.336l-3.747-2.972a2.75 2.75 0 0 0-3.418 0L7.552 24.38c-.957.759-2.323-.165-1.975-1.336l1.609-5.405a2.75 2.75 0 0 0-.927-2.94l-4.401-3.49c-.928-.735-.408-2.229.776-2.229h5.078a2.75 2.75 0 0 0 2.636-1.966l1.462-4.91Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
          >
            <path
              stroke="#FFCFE4"
              strokeWidth="2"
              d="M11.81 2.105c.354-1.191 2.042-1.191 2.396 0l1.461 4.91a2.751 2.751 0 0 0 2.636 1.966h5.08c1.183 0 1.703 1.494.775 2.23l-4.4 3.49a2.75 2.75 0 0 0-.928 2.94l1.609 5.404c.348 1.17-1.017 2.095-1.975 1.336l-3.747-2.972a2.75 2.75 0 0 0-3.418 0L7.552 24.38c-.957.759-2.323-.165-1.975-1.336l1.609-5.405a2.75 2.75 0 0 0-.927-2.94l-4.401-3.49c-.928-.735-.408-2.229.776-2.229h5.078a2.75 2.75 0 0 0 2.636-1.966l1.462-4.91Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
          >
            <path
              stroke="#FFCFE4"
              strokeWidth="2"
              d="M11.81 2.105c.354-1.191 2.042-1.191 2.396 0l1.461 4.91a2.751 2.751 0 0 0 2.636 1.966h5.08c1.183 0 1.703 1.494.775 2.23l-4.4 3.49a2.75 2.75 0 0 0-.928 2.94l1.609 5.404c.348 1.17-1.017 2.095-1.975 1.336l-3.747-2.972a2.75 2.75 0 0 0-3.418 0L7.552 24.38c-.957.759-2.323-.165-1.975-1.336l1.609-5.405a2.75 2.75 0 0 0-.927-2.94l-4.401-3.49c-.928-.735-.408-2.229.776-2.229h5.078a2.75 2.75 0 0 0 2.636-1.966l1.462-4.91Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
          >
            <path
              stroke="#FFCFE4"
              strokeWidth="2"
              d="M11.81 2.105c.354-1.191 2.042-1.191 2.396 0l1.461 4.91a2.751 2.751 0 0 0 2.636 1.966h5.08c1.183 0 1.703 1.494.775 2.23l-4.4 3.49a2.75 2.75 0 0 0-.928 2.94l1.609 5.404c.348 1.17-1.017 2.095-1.975 1.336l-3.747-2.972a2.75 2.75 0 0 0-3.418 0L7.552 24.38c-.957.759-2.323-.165-1.975-1.336l1.609-5.405a2.75 2.75 0 0 0-.927-2.94l-4.401-3.49c-.928-.735-.408-2.229.776-2.229h5.078a2.75 2.75 0 0 0 2.636-1.966l1.462-4.91Z"
            />
          </svg>
        </div>
      </div>
      <p className="italic">{wishCardProps.category}</p>
      <p>{wishCardProps.comment}</p>

      <div className="self-end pr-2.5 pt-3">
        <a
          href={wishCardProps.link}
          className=" flex items-center gap-2 text-[#E8A2B0] font-medium"
          target="_blank"
          rel="noreferrer"
        >
          <p>Купить</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            fill="none"
          >
            <path
              fill="#E8A2B0"
              d="M11.993 3.119a1 1 0 0 0-.874-1.112L2.182.94a1 1 0 0 0-.237 1.986l7.943.948-.948 7.944a1 1 0 1 0 1.986.237l1.067-8.936ZM1 10.866l.618.786 10-7.866L11 3l-.618-.786-10 7.866.618.786Z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WishCard;
