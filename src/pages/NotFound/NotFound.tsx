import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid place-content-center h-screen">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <NavLink to="/">
            <Button type="primary" className="bg-[#223E51]">
              Back Home
            </Button>
          </NavLink>
        }
      />
    </section>
  );
}
