import { Col, Row } from "antd";

type Props = {
  children: React.ReactNode;
};

const Center: React.FC<Props> = ({ children }) => {
  return (
    <Row align="middle" justify="center" style={{ height: "100%" }}>
      <Col>{children}</Col>
    </Row>
  );
};

export default Center;
