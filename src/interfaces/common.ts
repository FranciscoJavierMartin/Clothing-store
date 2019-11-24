export interface IShopSection {
  id: number;
  title: string;
  routeName: string;
  items: IShopItem[];
}

export interface IShopItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface IHomeSection {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
  linkUrl: string;
}

export interface IUserData{
  id: string;
  createdAt: Date;
  displayName: string;
  email: string;
}