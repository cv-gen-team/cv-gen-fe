import { AuthUserInfo } from "@graphql/Auth/Auth.interface";
import { User } from "@interfaces/user.interface";
import { IAuthStore } from "@src/stores/AuthStore/AuthStore.types";

export interface IAction {
  type: string;
  payload?: any;
}

export interface IContext {
  user: User | null;
  login: (userData: AuthUserInfo, isMemorized: boolean) => void;
  logout: () => void;
}

export interface IAuthContextProps {
  children?: React.ReactNode;
}
