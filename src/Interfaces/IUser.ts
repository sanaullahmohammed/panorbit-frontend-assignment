import { IAddress } from "./IAddress";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  profilepicture: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
