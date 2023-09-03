import { Button, Form, Input, Select, message } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Center from "../Center/Center";
import { ROUTES } from "../../routes";
import { User } from "../Users/users.type";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../graphql/users";
import { GraphQLUpdateUser, GraphQLVariablesUpdateUser } from "./edit.type";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [messageAPI, contextHolder] = message.useMessage();

  const [updateUser, { loading }] = useMutation<
    GraphQLUpdateUser,
    GraphQLVariablesUpdateUser
  >(UPDATE_USER);

  const onFinish = async (values: Omit<User, "id">) => {
    try {
      const variables = {
        id: location.state.id as number,
        ...values,
      };

      const result = await updateUser({ variables });
      if (result.data?.updateUser) {
        messageAPI.open({
          type: "success",
          content:
            "User updated successfully. You will be redirected to /users in 3 seconds.",
        });

        setTimeout(() => {
          navigate(ROUTES.USERS);
        }, 3000);
      }
    } catch (e) {
      if (e instanceof Error) {
        messageAPI.open({
          type: "error",
          content: "Error: " + e.message,
        });
      }
    }
  };

  return (
    <Center>
      {contextHolder}
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ ...location.state }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { type: "email", message: "The input is not valid E-mail!" },
            { required: true, message: "Please input email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Please select status!" }]}
        >
          <Select>
            <Select.Option value="active">Active</Select.Option>
            <Select.Option value="inactive">Inactive</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Save
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to={ROUTES.USERS}>
            <Button type="default" block disabled={loading}>
              Go back
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </Center>
  );
};

export default Edit;
