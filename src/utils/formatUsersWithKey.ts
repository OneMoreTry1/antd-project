import { User } from "../components/Users/users.type";

export const formatUsersWithKey = (users: User[]) => {
  return users.map((user) => ({ ...user, key: user.id }));
};
