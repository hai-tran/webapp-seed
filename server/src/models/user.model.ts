export interface IUser {
  id: string;
  username: string;
  password: string;
}

const Users: IUser[] = [
  {
    id: '1c34de30-1d4c-47f9-975a-9ebd03032304',
    username: 'admin',
    password: 'password'
  },
];

export class UserModel {
  public findByUsername(username: string): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      resolve(Users.find(user => user.username === username));
    });
  }

  public findById(id: string): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      resolve(Users.find(user => user.id === id));
    });
  }
}

export const User: UserModel = new UserModel();
