import { Repository } from "./repository";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Details: Repository;
      Repository: undefined;
      Favorites: undefined;
    }
  }
}