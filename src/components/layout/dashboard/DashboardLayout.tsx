import { Button, Divider, Image, Layout, Menu } from "antd";
import { IDashboardLayout } from "../../../types/index.type";
import { NavLink, Outlet } from "react-router-dom";
const { Content, Sider } = Layout;
import img from "../../../assets/images/logo.png";
import MyButton from "../../common/MyButton";
import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../../redux/store/hooks";
import { selectCurrentUser } from "../../../redux/feature/auth/authSlice";
import { useState } from "react";

const DashboardLayout = ({ items }: IDashboardLayout) => {
  const user = useAppSelector(selectCurrentUser);
  const profileText = user?.name?.slice(0, 1).toUpperCase();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        width={275}
        style={{
          backgroundColor: "#222222",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="h-screen sticky top-0 z-50"
      >
        <section className="flex flex-col justify-between h-full p-3 w-full">
          <div className="space-y-5 w-full">
            <Image preview={false} src={img} alt="" className="w-full" />
            <Divider variant="dashed" className="text-white bg-white/30" />
            <Menu theme="dark" mode="vertical" defaultSelectedKeys={["Dashboard"]} items={items} className="bg-[#2A5979] space-y-4 text-lg w-full" />
          </div>

          <aside className="flex flex-col gap-4">
            <Divider variant="dashed" className="text-white bg-white/30 p-0 m-0" />
            <div className="flex gap-3 items-center">
              <h2 className="p-2 rounded-full bg-cyan-500 border text-2xl font-semibold size-12 text-center text-white">{profileText}</h2>
              <div className="">
                <p className="text-gray-100 font-medium" title={user?.name}>
                  {user?.name?.slice(0, 15)}
                  {(user?.name?.length ?? 0) > 15 && "..."}
                </p>
                <p className="text-gray-300 text-sm" title={user?.email}>
                  {user?.email.slice(0, 20)}
                  {(user?.email?.length ?? 0) > 20 && "..."}
                </p>
              </div>
            </div>
            <NavLink to="/">
              <MyButton text="Home" icon={<HomeOutlined />} extraStyle="w-full " />
            </NavLink>
          </aside>
        </section>
      </Sider>

      <Layout>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            width: 45,
            height: 45,
            color: "rgb(241 245 249)",
          }}
        />

        <Content>
          <div className="p-4 sm:p-10 dark:bg-[#222222] rounded-md m-5">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
