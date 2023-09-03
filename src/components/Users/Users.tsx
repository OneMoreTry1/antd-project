import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/users";
import { Col, Row, Select, Table, Typography } from "antd";
import { formatUsersWithKey } from "../../utils/formatUsersWithKey";
import { useState } from "react";
import Center from "../Center/Center";
import { GraphQLUsers, User } from "./users.type";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

const Users = () => {
  const navigate = useNavigate();

  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [cursor, setCursor] = useState<{
    before: string | null;
    after: string | null;
  }>({ before: null, after: null });

  const { loading, error, data } = useQuery<GraphQLUsers>(GET_USERS, {
    variables: {
      before: cursor.before,
      after: cursor.after,
    },
  });

  if (error) {
    return (
      <Center>
        <Typography.Text type="danger">Error: {error.message}</Typography.Text>
      </Center>
    );
  }

  const onPageChange = (page: number) => {
    if (page > currentPage) {
      setCursor({
        before: null,
        after: data?.users.pageInfo.endCursor ?? null,
      });
    } else if (page < currentPage) {
      setCursor({
        before: data?.users.pageInfo.startCursor ?? null,
        after: null,
      });
    }

    setCurrentPage(page);
  };

  const handleRowClick = (record: User & { key: number }) => {
    navigate(ROUTES.EDIT, { state: record });
  };

  const filteredUsers =
    selectedGender !== "all"
      ? data?.users.nodes.filter((user) => user.gender === selectedGender)
      : data?.users.nodes;

  return (
    <>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col>
          <Select placeholder="Select gender" onChange={setSelectedGender}>
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Col>
      </Row>
      <Table
        onRow={(record) => ({ onClick: () => handleRowClick(record) })}
        loading={loading}
        columns={columns}
        dataSource={formatUsersWithKey(filteredUsers || [])}
        pagination={{
          current: currentPage,
          total: data?.users.totalCount,
          onChange: onPageChange,
          simple: true,
        }}
        style={{ marginTop: "20px" }}
      />
    </>
  );
};

export default Users;
