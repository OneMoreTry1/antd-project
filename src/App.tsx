import { Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "./routes";
import Center from "./components/Center/Center";

const App = () => {
  return (
    <Center>
      <Link to={ROUTES.USERS}>
        <Button type="link">Go to Users page</Button>
      </Link>
    </Center>
  );
};

export default App;
