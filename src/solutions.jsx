import React, { Fragment } from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  TextInput,
  BulkDeleteButton,
  Filter,
  SearchInput,
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
import ResetViewsButton from "./ResetViewsButton";

export const SolutionIcon = BookIcon;

const SolutionTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ""}</span>;
};

const SolutionBulkActionButtons = (props) => (
  <Fragment>
    <ResetViewsButton label="Reset Views" {...props} />
    <BulkDeleteButton {...props} />
  </Fragment>
);

const SolutionFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <TextInput source="title" defaultValue="" />
  </Filter>
);

export const SolutionList = (props) => (
  <List
    {...props}
    filters={<SolutionFilter />}
    title="Solutions"
    bulkActionButtons={<SolutionBulkActionButtons />}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="image" />
      <EditButton basePath="/solutions" />
    </Datagrid>
  </List>
);

export const SolutionEdit = (props) => (
  <Edit {...props} title={<SolutionTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="image" />
    </SimpleForm>
  </Edit>
);

export const SolutionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="image" />
    </SimpleForm>
  </Create>
);
