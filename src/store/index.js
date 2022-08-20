import axios from "axios";
import { selector, atom } from "recoil";

const Theme = atom({
  key: "switch-theme",
  default: "dark",
});

const AuthUser = selector({
  key: "auth-user",
  get: async () => {
    let user = null;

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/2`
      );
      user = {
        user: data,
      };
    } catch (err) {
      user = {
        user: err.message,
      };
    }

    return user;
  },
});

export { AuthUser, Theme };
