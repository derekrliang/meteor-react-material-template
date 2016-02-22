import React from 'react';

import {MainLayout} from './pages/layouts/MainLayout.jsx';
import {Home} from './pages/Home.jsx';
import {Login, Register} from './pages/Auth.jsx';
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

publicRoutes.route('/register', {
    name: 'register',
    action() {
        mount(MainLayout, {
            content: <Register/>
        });
    }
});
