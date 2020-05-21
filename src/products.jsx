import React from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  TextInput,
  ImageField,
} from "react-admin";

export const ProductList = (props) => (
  <List {...props} title="Products">
    <Datagrid>
      <TextField source="_id"/>
      <ImageField source="images" src="url"/>
      <TextField source="title" />
      <TextField source="solution" />
      <TextField multiline source="description" />
      <EditButton basePath="/products" />
    </Datagrid>
  </List>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="_id"/>
      <TextInput source="title" />
      <TextInput source="image" />
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="image" />
    </SimpleForm>
  </Create>
);
