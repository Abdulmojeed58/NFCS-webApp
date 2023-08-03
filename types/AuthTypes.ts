import { User } from "firebase/auth";

export type ContextProp = {
  children: React.ReactNode;
};

export type ValueProp = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logOut: () => Promise<unknown>;
  loginWithGoogle: () => Promise<unknown>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  createNewUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<void>;

  resetPassword: (email: string) => Promise<any>;
  updateUserProfilePicture: (
    file: any,
    currentUser: any,
    setUrlLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  setAuthPersistence: React.Dispatch<React.SetStateAction<boolean>>;
  authPersistence: boolean;

  userEmailRef: React.RefObject<HTMLInputElement> | null;
  userPasswordRef: React.RefObject<HTMLInputElement> | null;
  userNameRef: React.RefObject<HTMLInputElement> | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isReset: boolean;
  handleIsReset: () => void;
  adminPhotoUpload: (file: any) => Promise<void>;
  mediaUrls: string[];
  members: any;
  setMembers: React.Dispatch<any>;
};
