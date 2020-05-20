import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import dataProvider from './dataProvider'
import { SolutionList, SolutionEdit, SolutionCreate, SolutionIcon } from './solutions';
import authProvider from "./authProvider"


const AdminPanel = () => (

    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="solutions" list={SolutionList} edit={SolutionEdit} create={SolutionCreate} icon={SolutionIcon}/>
    </Admin>
  
)

export default AdminPanel