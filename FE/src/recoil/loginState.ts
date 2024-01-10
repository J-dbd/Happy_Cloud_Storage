import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

/**
 * Implemented recoil-persist
 * to prevent recoil's atoms
 * from disappearing when the page is refreshed.
 */

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "loginState-persist-atom",
  storage: sessionStorage,
});

export const loginState = atom({
  key: "loginState",
  default: {
    isLoggedIn: false,
    token: "",
  },
  effects_UNSTABLE: [persistAtom],
});
