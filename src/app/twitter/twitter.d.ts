interface IPost {
  id: string;
  createdAt: Date;
  handle: string;
  name: string;
  profilePhotoURL: string;
  text: string;
  liked?: boolean;
  reposted?: boolean;
}

interface IUser {
  name: string;
  handle: string;
  headerPhotoURL: string;
  profilePhotoURL: string;
}

interface IAppState {
  newPostIds: string[];
  posts: IPost[];
  user: IUser;
}
