import React from 'react';
import {MainLayout} from './pages/layouts/MainLayout.jsx';
import {MaterialLayout} from './pages/layouts/MaterialLayout.jsx';
import {Home} from './pages/Home.jsx';
import {mount} from 'react-mounter';
h
publicRoutes = FlowRouter.group({
    name: 'publicroute'
});

publicRoutes.route('/', {
    action() {
        mount(MainLayout, {
            content: <Home/>
        });
    }
});

publicRoutes.route('/material', {
    action() {
        mount(MaterialLayout, {
            content: <Home/>
        });
    }
});
