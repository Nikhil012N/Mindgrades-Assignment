import { Header, Sidebar } from "@/components/Layout";
import React from "react";


const Template = ({ children }) => {
  return (
    <Sidebar>
      <Header />
      {children}
    </Sidebar>
  );
};

export default Template;
