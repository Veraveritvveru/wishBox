export type WishCardPropsType = {
  id: number;
  photo: string;
  title: string;
  link: string;
  category: string;
  priority: number;
  comment?: string;
  isPublic: boolean;
  onEdit?: (id: number) => void;
};

export type WishListProps = {
  // children: React.JSX.Element;
  wishes: WishCardPropsType[];
};
