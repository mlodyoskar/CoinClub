import React from "react";
import styled from "styled-components";
import { theme } from "./themes/MainTheme";
import SidebarFollow from "./components/SidebarFollow";

const Wrapper = styled.section`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  padding-right: 10em;
  padding-top: 4em;
  max-width: 24em;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarFollow></SidebarFollow>
      <SidebarFollow></SidebarFollow>
      <SidebarFollow></SidebarFollow>
    </Wrapper>
  );
};

export default Sidebar;
