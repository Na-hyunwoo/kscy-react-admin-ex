import * as React from "react";
import {Admin, Resource} from 'react-admin';
import {PostList, PostEdit, PostCreate} from './posts';
import {UserList} from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";

// 커밋 설정이 잘 된건가 모르겠네요 ?
const App=()=>(
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
);

export default App;
