import React from 'react';
import {MainLayout} from './pages/layouts/MainLayout.jsx';
import {MaterialLayout} from './pages/layouts/MaterialLayout.jsx';
import {Home} from './pages/Home.jsx';
import {Login} from './components/Login.jsx';
import {mount} from 'react-mounter';

publicRoutes = FlowRouter.group({
    name: 'publicroute'
});

publicRoutes.route('/', {
    name: 'home',
    action() {
        mount(MainLayout, {
            content: <Home/>
        });
    }
});

publicRoutes.route('/login', {
    name: 'login',
    action() {
        mount(MainLayout, {
            content: <Login/>
        });
    }
});

publicRoutes.route('/material', {
    name: 'material',
    action() {
        mount(MaterialLayout, {
            content: <Home/>
        });
    }
});
