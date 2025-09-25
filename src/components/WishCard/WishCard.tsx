import { useEffect, useRef, useState } from 'react';
import { WishCardPropsType } from '../../types';
import classes from './WishCard.module.css';
// import OptionsMenu from './OptionsMenu/OptionsMenu';

const WishCard = (wishCardProps: WishCardPropsType) => {
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsile = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setIsOptionsOpened(false);
    };
    document.addEventListener('click', handleClickOutsile);
    return () => document.removeEventListener('click', handleClickOutsile);
  }, []);

  return (
    <div className={classes.wishCard}>
      <div className="relative flex gap-2 items-center min-h-14">
        <span className="material-symbols-outlined">
          {wishCardProps.isPublic ? 'lock_open' : 'lock'}
        </span>
        <h3 className="font-medium">{wishCardProps.title}</h3>

        <div className={classes.optionsWrapper} ref={menuRef}>
          <button
            className={classes.options}
            onClick={() => setIsOptionsOpened((prev) => !prev)}
          >
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
          </button>
          {/* {isOptionsOpened && <OptionsMenu />} */}
          {isOptionsOpened && (
            <div className="absolute top-[90%] right-[50%] flex flex-col gap-1 text-[#576E3B] font-medium bg-[#FAF5EE] rounded-2xl py-2">
              <button
                className="text-xs flex gap-2 cursor-pointer hover:bg-[rgba(162,191,127,0.5)] transition-colors py-1.5 pl-3.5 pr-5"
                onClick={() => wishCardProps.onEdit?.(wishCardProps.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="none"
                >
                  <path
                    stroke="#576E3B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m7.5 5-5 5v2.5H5l5-5M7.5 5l1.793-1.793h.001c.247-.248.37-.371.513-.418.125-.04.26-.04.386 0 .143.047.266.17.513.417l1.087 1.087c.247.247.371.371.418.514.04.125.04.26 0 .386-.047.143-.17.266-.418.514h0L10 7.5M7.5 5 10 7.5"
                  />
                </svg>
                <p>Редактировать</p>
              </button>
              <button className="text-xs flex gap-2 cursor-pointer hover:bg-[rgba(162,191,127,0.5)] transition-colors py-1.5 pl-3.5 pr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="none"
                >
                  <path
                    fill="#576E3B"
                    d="M3.82 4.47a.65.65 0 0 0 1.299 0H3.82Zm.65-.202h.649v-.004l-.65.004Zm2.797-2.83V.79h-.003l.003.65Zm3.497 0 .003-.649h-.003v.65Zm2.797 2.83-.65-.004v.004h.65Zm0 3.434h-.65v.003l.65-.003Zm-2.797 2.829v.649h.003l-.003-.65Zm-.233-.65a.65.65 0 0 0 0 1.299V9.88ZM4.47 5.12a.65.65 0 0 0 0-1.299v1.299Zm-.233-.65V3.82h-.004l.004.65ZM1.439 7.3h.65v-.004l-.65.003Zm0 3.434.65.003v-.003h-.65Zm2.798 2.828-.004.65h.004v-.65Zm3.496 0v.65h.004l-.004-.65Zm2.798-2.829h-.65v.004l.65-.004Zm.649-.201a.65.65 0 1 0-1.299 0h1.299ZM4.47 3.82a.65.65 0 0 0 0 1.299V3.82Zm3.263.65.004-.65h-.004v.65Zm2.798 2.828-.65-.003v.003h.65Zm-.65 3.232a.65.65 0 0 0 1.299 0H9.881ZM5.12 4.47v-.202H3.82v.201H5.12Zm0-.206a2.164 2.164 0 0 1 .625-1.534l-.923-.913a3.463 3.463 0 0 0-1 2.454l1.298-.007Zm.625-1.534c.404-.408.953-.639 1.527-.642L7.264.79A3.463 3.463 0 0 0 4.82 1.817l.923.913Zm1.523-.642h3.497V.79H7.267v1.3Zm3.493 0a2.164 2.164 0 0 1 1.527.642l.923-.913A3.462 3.462 0 0 0 10.767.79l-.007 1.3Zm1.527.642c.403.409.628.96.625 1.534l1.298.007a3.462 3.462 0 0 0-1-2.454l-.924.913Zm.625 1.538v3.434h1.298V4.268h-1.298Zm0 3.437a2.164 2.164 0 0 1-.626 1.534l.924.913a3.462 3.462 0 0 0 1-2.454l-1.298.007Zm-.626 1.534a2.164 2.164 0 0 1-1.526.642l.007 1.299a3.463 3.463 0 0 0 2.443-1.028l-.924-.913Zm-1.522.642h-.233v1.299h.232V9.88ZM4.47 3.82h-.233v1.299h.233V3.82Zm-.237 0A3.463 3.463 0 0 0 1.79 4.848l.924.913c.403-.408.952-.64 1.526-.642L4.233 3.82ZM1.79 4.848a3.463 3.463 0 0 0-1 2.454l1.298-.007a2.164 2.164 0 0 1 .626-1.534l-.924-.913Zm-1 2.45v3.435h1.298V7.298H.79Zm0 3.432a3.463 3.463 0 0 0 3.443 3.48l.007-1.298a2.164 2.164 0 0 1-2.152-2.176L.79 10.73Zm3.447 3.48h3.496v-1.298H4.237v1.298Zm3.5 0a3.462 3.462 0 0 0 2.442-1.027l-.923-.914a2.164 2.164 0 0 1-1.527.643l.008 1.298Zm2.442-1.027a3.463 3.463 0 0 0 1.001-2.454l-1.299.007a2.164 2.164 0 0 1-.625 1.533l.923.914Zm1.001-2.45v-.203H9.881v.202h1.299ZM4.47 5.118h3.263V3.82H4.47v1.299Zm3.26 0a2.164 2.164 0 0 1 1.526.642l.923-.913A3.463 3.463 0 0 0 7.737 3.82l-.008 1.299Zm1.526.642c.404.408.628.96.625 1.534l1.299.007a3.463 3.463 0 0 0-1-2.454l-.924.913Zm.625 1.537v3.232h1.299V7.298H9.881Z"
                  />
                </svg>
                <p>Копировать</p>
              </button>
              <button className="text-xs flex gap-2 cursor-pointer hover:bg-[rgba(162,191,127,0.5)] transition-colors py-1.5 pl-3.5 pr-5">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5293 6.95183L5.29082 10.7058L12.2352 3.82349"
                    stroke="#576E3B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p>Исполнено</p>
              </button>
              <button className="text-xs flex gap-2 cursor-pointer hover:bg-[rgba(162,191,127,0.5)] transition-colors py-1.5 pl-3.5 pr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  fill="none"
                >
                  <path
                    stroke="#576E3B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 6.625V9.75M7.25 6.625V9.75M1 3.5h10M2.25 5.375v5c0 1.036.84 1.875 1.875 1.875h3.75c1.036 0 1.875-.84 1.875-1.875v-5M4.125 2.25c0-.69.56-1.25 1.25-1.25h1.25c.69 0 1.25.56 1.25 1.25V3.5h-3.75V2.25Z"
                  />
                </svg>
                <p>Удалить</p>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        {wishCardProps.photo ? (
          <div className={classes.imgWrapper}>
            <img
              className={classes.image}
              src={wishCardProps.photo}
              alt={wishCardProps.title}
            />
          </div>
        ) : (
          <div className={[classes.imgWrapper, classes.noPhoto].join(' ')}>
            Нет фото
          </div>
        )}

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
      {wishCardProps.link && (
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
      )}
    </div>
  );
};

export default WishCard;
