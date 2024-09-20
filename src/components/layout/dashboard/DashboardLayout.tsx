import { Image, Layout, Menu } from "antd";
import { IDashboardLayout } from "../../../types/index.type";
import { NavLink, Outlet } from "react-router-dom";
const { Content, Sider } = Layout;
import img from "../../../assets/images/logo.png";
import MyButton from "../../common/MyButton";
import { HomeOutlined } from "@ant-design/icons";

const DashboardLayout = ({ items }: IDashboardLayout) => {
  return (
    <Layout>
      <Sider
        breakpoint="sm"
        collapsedWidth="0"
        width={240}
        style={{
          backgroundColor: "#2A5979",
        }}
      >
        <div className=" flex flex-col justify-between h-full p-3">
          <div className="space-y-5">
            <Image preview={false} src={img} alt="" className="w-full" />
            <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]} items={items} className="bg-[#2A5979] space-y-4" />
          </div>

          <NavLink to="/">
            <MyButton text="Home" icon={<HomeOutlined />} extraStyle="w-full " />
          </NavLink>
        </div>
      </Sider>

      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="min-h-[calc(100vh-24px)] p-10 bg-gray-200 rounded-md">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
