import { useEffect, useState } from 'react';
import MyButton from './UI/button/MyButton';
import { WishCardPropsType } from '../types';
import { v4 as uuidv4 } from 'uuid';

type WishFormProps = {
  onSubmit: (wish: WishCardPropsType) => void;
  initialData?: WishCardPropsType;
};

const newWishFormFields = {
  id: Date.now(),
  photo: '',
  title: '',
  link: '',
  category: '',
  priority: 1,
  comment: '',
  isPublic: false,
};

const WishForm = ({ onSubmit, initialData }: WishFormProps) => {
  const [formData, setFormData] = useState<WishCardPropsType>(
    initialData ?? { ...newWishFormFields, id: Date.now() }
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ ...newWishFormFields, id: Date.now() });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onSubmit({ ...formData, id: formData.id || uuidv4() });
    setFormData(newWishFormFields);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-7">
      <label className="flex flex-col gap-[4px] text-sm">
        Название *
        <input
          required
          type="text"
          value={formData.title}
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
          placeholder="Например: наушники, букет цветов"
          className="border rounded-md px-2 py-1.5 border-gray-500 w-full"
        />
      </label>
      <label className="flex flex-col gap-[4px] text-sm">
        Ссылка
        <input
          type="URL"
          value={formData.link}
          onChange={(event) =>
            setFormData({ ...formData, link: event.target.value })
          }
          placeholder="Например: https://ozon.ru/product/gift"
          className="border rounded-md px-2 py-1.5 border-gray-500 w-full"
        />
      </label>
      <label className="flex flex-col gap-[4px] text-sm">
        Фото
        <input
          type="text"
          value={formData.photo}
          onChange={(event) =>
            setFormData({ ...formData, photo: event.target.value })
          }
          placeholder="Ссылка на изображение"
          className="border rounded-md px-2 py-1.5 border-gray-500 w-full"
        />
      </label>
      <label className="flex flex-col gap-[4px] text-sm">
        Категория
        <input
          type="text"
          value={formData.category}
          onChange={(event) =>
            setFormData({ ...formData, category: event.target.value })
          }
          placeholder="Ссылка на изображение"
          className="border rounded-md px-2 py-1.5 border-gray-500 w-full"
        />
      </label>

      <div className="flex items-center gap-2">
        <label>Приоритет</label>
        <input
          type="number"
          min="1"
          max="5"
          className="w-16 border p-1 rounded"
          value={formData.priority}
          onChange={(e) =>
            setFormData({ ...formData, priority: +e.target.value })
          }
        />
      </div>

      <label className="flex flex-col gap-[4px] text-sm">
        Комментарий
        <textarea
          value={formData.comment}
          onChange={(event) =>
            setFormData({ ...formData, comment: event.target.value })
          }
          placeholder="Детали или какие-то другие особенности"
          className="border rounded-md px-2 pt-1.5 pb-13 border-gray-500 w-full"
        />
      </label>
      <label className="flex flex-col gap-[4px] text-sm">
        <input
          type="checkbox"
          value={formData.comment}
          onChange={(event) =>
            setFormData({ ...formData, isPublic: event.target.checked })
          }
        />
        Публичная
      </label>

      <MyButton type="submit">
        {initialData ? 'Сохранить' : 'Добавить'}
      </MyButton>
    </form>
  );
};

export default WishForm;

/* <label className="flex flex-col gap-[4px] text-sm">
          Приоритет: */
/* <input
            type="text"
            placeholder="Ссылка на изображение"
            className="w-3/5 border rounded-md px-2 py-1.5 border-gray-500"
          /> */
/* <div className="stars flex gap-2">
            <svg
              cursor={'pointer'}
              width="28"
              height="29"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5918 2.37109C14.9487 1.59465 16.0513 1.59466 16.4082 2.37109L19.3311 8.72852C19.768 9.67878 20.6683 10.3331 21.707 10.4551L28.6572 11.2695C29.5057 11.3693 29.8467 12.4187 29.2188 12.998L24.0752 17.7422C23.3064 18.4514 22.9629 19.5095 23.168 20.5352L24.54 27.3965C24.7076 28.2343 23.8154 28.8828 23.0703 28.4648L16.9688 25.0391C16.0566 24.527 14.9434 24.527 14.0312 25.0391L7.92969 28.4648C7.18462 28.8828 6.29236 28.2343 6.45996 27.3965L7.83203 20.5352C8.03708 19.5095 7.69359 18.4514 6.9248 17.7422L1.78125 12.998C1.15335 12.4187 1.49432 11.3693 2.34277 11.2695L9.29297 10.4551C10.3317 10.3331 11.232 9.67878 11.6689 8.72852L14.5918 2.37109Z"
                stroke="#EFC982"
                strokeWidth="2"
              />
            </svg>
            <svg
              cursor={'pointer'}
              width="28"
              height="29"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5918 2.37109C14.9487 1.59465 16.0513 1.59466 16.4082 2.37109L19.3311 8.72852C19.768 9.67878 20.6683 10.3331 21.707 10.4551L28.6572 11.2695C29.5057 11.3693 29.8467 12.4187 29.2188 12.998L24.0752 17.7422C23.3064 18.4514 22.9629 19.5095 23.168 20.5352L24.54 27.3965C24.7076 28.2343 23.8154 28.8828 23.0703 28.4648L16.9688 25.0391C16.0566 24.527 14.9434 24.527 14.0312 25.0391L7.92969 28.4648C7.18462 28.8828 6.29236 28.2343 6.45996 27.3965L7.83203 20.5352C8.03708 19.5095 7.69359 18.4514 6.9248 17.7422L1.78125 12.998C1.15335 12.4187 1.49432 11.3693 2.34277 11.2695L9.29297 10.4551C10.3317 10.3331 11.232 9.67878 11.6689 8.72852L14.5918 2.37109Z"
                stroke="#EFC982"
                strokeWidth="2"
              />
            </svg>
            <svg
              cursor={'pointer'}
              width="28"
              height="29"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5918 2.37109C14.9487 1.59465 16.0513 1.59466 16.4082 2.37109L19.3311 8.72852C19.768 9.67878 20.6683 10.3331 21.707 10.4551L28.6572 11.2695C29.5057 11.3693 29.8467 12.4187 29.2188 12.998L24.0752 17.7422C23.3064 18.4514 22.9629 19.5095 23.168 20.5352L24.54 27.3965C24.7076 28.2343 23.8154 28.8828 23.0703 28.4648L16.9688 25.0391C16.0566 24.527 14.9434 24.527 14.0312 25.0391L7.92969 28.4648C7.18462 28.8828 6.29236 28.2343 6.45996 27.3965L7.83203 20.5352C8.03708 19.5095 7.69359 18.4514 6.9248 17.7422L1.78125 12.998C1.15335 12.4187 1.49432 11.3693 2.34277 11.2695L9.29297 10.4551C10.3317 10.3331 11.232 9.67878 11.6689 8.72852L14.5918 2.37109Z"
                stroke="#EFC982"
                strokeWidth="2"
              />
            </svg>
            <svg
              cursor={'pointer'}
              width="28"
              height="29"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5918 2.37109C14.9487 1.59465 16.0513 1.59466 16.4082 2.37109L19.3311 8.72852C19.768 9.67878 20.6683 10.3331 21.707 10.4551L28.6572 11.2695C29.5057 11.3693 29.8467 12.4187 29.2188 12.998L24.0752 17.7422C23.3064 18.4514 22.9629 19.5095 23.168 20.5352L24.54 27.3965C24.7076 28.2343 23.8154 28.8828 23.0703 28.4648L16.9688 25.0391C16.0566 24.527 14.9434 24.527 14.0312 25.0391L7.92969 28.4648C7.18462 28.8828 6.29236 28.2343 6.45996 27.3965L7.83203 20.5352C8.03708 19.5095 7.69359 18.4514 6.9248 17.7422L1.78125 12.998C1.15335 12.4187 1.49432 11.3693 2.34277 11.2695L9.29297 10.4551C10.3317 10.3331 11.232 9.67878 11.6689 8.72852L14.5918 2.37109Z"
                stroke="#EFC982"
                strokeWidth="2"
              />
            </svg>
            <svg
              cursor={'pointer'}
              width="28"
              height="29"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5918 2.37109C14.9487 1.59465 16.0513 1.59466 16.4082 2.37109L19.3311 8.72852C19.768 9.67878 20.6683 10.3331 21.707 10.4551L28.6572 11.2695C29.5057 11.3693 29.8467 12.4187 29.2188 12.998L24.0752 17.7422C23.3064 18.4514 22.9629 19.5095 23.168 20.5352L24.54 27.3965C24.7076 28.2343 23.8154 28.8828 23.0703 28.4648L16.9688 25.0391C16.0566 24.527 14.9434 24.527 14.0312 25.0391L7.92969 28.4648C7.18462 28.8828 6.29236 28.2343 6.45996 27.3965L7.83203 20.5352C8.03708 19.5095 7.69359 18.4514 6.9248 17.7422L1.78125 12.998C1.15335 12.4187 1.49432 11.3693 2.34277 11.2695L9.29297 10.4551C10.3317 10.3331 11.232 9.67878 11.6689 8.72852L14.5918 2.37109Z"
                stroke="#EFC982"
                strokeWidth="2"
              />
            </svg>
          </div>
        </label> */
