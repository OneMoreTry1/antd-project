export type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type GraphQLUsers = {
  users: {
    nodes: User[];
    pageInfo: {
      endCursor: string;
      startCursor: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    totalCount: number;
  };
};
