export enum Status {
  ERROR = 'error',
  SUCCESS = 'success',
  LOADING = 'loading',
}

export type ItemsTypes = {
  id: string;
  price: number;
  kcal: string;
  about: string;
  rating: number;
  time: number;
  imageUrl: string;
  title: string;
};
export type FetchParams = {
  search: string;
  categories: string;
};

export interface IDishesSlice {
  items: ItemsTypes[];
  status: Status;
}
