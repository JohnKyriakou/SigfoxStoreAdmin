import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import {
  SolutionList,
  SolutionEdit,
  SolutionCreate,
  SolutionIcon,
} from "./solutions";
import authProvider from "./authProvider";
import Dashboard from "./Dashboard";

const AdminPanel = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="solutions"
      list={SolutionList}
      edit={SolutionEdit}
      create={SolutionCreate}
      icon={SolutionIcon}
    />
  </Admin>
);

export default AdminPanel;
