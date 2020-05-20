import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const SolutionIcon = BookIcon;


const SolutionTitle = ({ record }) => {
    return <span>{record ? `${record.title}` : ""}</span>;
  };
  

export const SolutionList = (props) => (
    <List {...props}  title="List of solutions" >
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="image" />
            <EditButton basePath="/solutions" />
        </Datagrid>
    </List>
);


export const SolutionEdit = (props) => (
    <Edit {...props} title={<SolutionTitle/>}>
        <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />  
      <TextInput source="image" />
           
        </SimpleForm>
    </Edit>
);

export const SolutionCreate = (props) => (
    <Create  {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
      <TextInput source="title" />  
      <TextInput source="image" />
        </SimpleForm>
    </Create>
);