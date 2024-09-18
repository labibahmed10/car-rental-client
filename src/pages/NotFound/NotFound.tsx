import { Result } from "antd";
import { NavLink } from "react-router-dom";
import MyButton from "../../components/common/MyButton";

export default function NotFound() {
  return (
    <section className="grid place-content-center h-screen">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <NavLink to="/">
            <MyButton text="Back Home" />
          </NavLink>
        }
      />
    </section>
  );
}
