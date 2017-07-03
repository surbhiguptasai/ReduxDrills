import React from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import SingleEmail from './single-email';
import Sidebar from './sidebar';

import EmailList from './email-list';
import './email.css';

export default function App() {
    return (
        <Router>
            <div className="email">
                <Sidebar />
                <main>
                <Redirect from="/" to="/inbox" />
                <Route exact path="/:folderId" component={EmailList} />
                <Route exact path="/:folderId/:emailId" component={SingleEmail} />
                </main>
            </div>
        </Router>
    );
}
