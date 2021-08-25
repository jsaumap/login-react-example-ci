import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutRouter } from "../Routers/LayoutRouter";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const LayoutPage = () => {
  const [state, setState] = useState({
    collapsed: false,
    menu: {
      item: "",
      subItem: "",
    },
  });
  const { collapsed, menu } = state;

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setState({ ...state, collapsed });
  };

  const handlerMenu = (item: string, subItem: string) => {
    setState({
      ...state,
      menu: {
        item,
        subItem,
      },
    });
  };

  return (
    //TODO: Separar
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
            <Menu.Item key="1">
              <Link
                to="/Login"
                onClick={() => handlerMenu("Usuarios", "Login")}
              >
                Login
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link
                to="/User/UserForm"
                onClick={() => handlerMenu("Usuarios", "Crear")}
              >
                Crear
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link
                to="/User/UserTable"
                onClick={() => handlerMenu("Usuarios", "Listar")}
              >
                Listar
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{menu.item}</Breadcrumb.Item>
            <Breadcrumb.Item>{menu.subItem}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "80vh" }}
          >
            <LayoutRouter/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
