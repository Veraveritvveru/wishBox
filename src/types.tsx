export type WishCardPropsType = {
  id: number | string;
  photo: string;
  title: string;
  link: string;
  category: string;
  priority: number;
  comment?: string;
  isPublic: boolean;
  onEdit?: (id: number | string) => void;
  onDelete?: (id: number | string) => void;
};

export type WishListProps = {
  wishes: WishCardPropsType[];
  onAdd: (event: React.MouseEvent) => void;
  onEdit?: (id: number | string) => void;
  onDelete?: (id: number | string) => void;
};
