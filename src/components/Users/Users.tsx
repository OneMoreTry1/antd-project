import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/users";

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data);

  return <div>Users</div>;
};

export default Users;
