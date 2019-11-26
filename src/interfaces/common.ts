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
  quantity?: number;
}

export interface IHomeSection {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
  linkUrl: string;
}

export interface IUserData {
  createdAt: Date;
  displayName: string;
  email: string;
}

export interface ICurrentUserData extends IUserData{
  id: string;
}
