import React from 'react';
import {Header} from '../../components/Header.jsx';

export const MainLayout = ({content}) => (
    <div>
        <Header/>
        {content}
    </div>
);
