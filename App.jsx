const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { BookApp } from './pages/BookApp.jsx';
import { BookDetails } from './pages/BookDetails.jsx';
import { BookAdd } from './pages/BookAdd.jsx';
import { Home } from './pages/Home.jsx';
import { Notification } from './cmps/Notifications.jsx'

import { NavBar } from './cmps/AppHeader.jsx';


export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <header>
                        <NavBar />
                    </header>
                    <main className="page">
                        <Switch>
                            <Route component={BookDetails} path="/book/:bookId" />
                            <Route component={BookApp} path="/book" />
                            <Route component={BookAdd} path="/add" />

                            <Route component={Home} path="/" />
                        </Switch>
                    </main>
                    <Notification />
                </div>
            </Router>
        )
    }
}

