import React from 'react';
import {MainLayout, MainLayoutTwo} from './pages/layouts/MainLayout.jsx';
import {Home} from './pages/Home.jsx';
import {mount} from 'react-mounter';

// Test Layout
import {TestLayout, Welcome, Hello, HelloReact} from './pages/layouts/TestLayout.jsx';

publicRoutes = FlowRouter.group({
    name: 'publicroute'
});

publicRoutes.route('/', {
    action() {
        mount(MainLayoutTwo, {
            content: <Home/>
        });
    }
});

publicRoutes.route('/test', {
    action() {
        console.log("test");
        mount(TestLayout, {
            content: (
                <div>
                    <HelloReact name="react"/>
                </div>
            )
        });
    }
});