export type GraphQLUpdateUser = {
  updateUser: {
    user: {
      id: number;
    };
  };
};

export type GraphQLVariablesUpdateUser = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};
