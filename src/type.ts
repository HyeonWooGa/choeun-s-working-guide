export interface UserData {
  name: string;
  company: string;
  age?: number;
}

export interface UserAPIData {
  userData: [UserData];
}
