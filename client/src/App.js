import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AuthProvider from './context/AuthProvider';
import PrivateRoute from "./context/PrivateRoute";

import Home from './pages/home/Home';
import Register from './Components/register/Register';
import Login from "./Components/login/Login";
import Profile from "./Components/profile/Profile";
import ResetPassword from "./pages/reset/Reset";
import EditProfile from "./Components/edit_profile/EditProfile";
import LandingPage from './Components/landingPage/LandingPage';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/landingPage" component={LandingPage}/>
                    <Route path="/reset" component={ResetPassword}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <PrivateRoute path="/edit" component={EditProfile}/>
                    <PrivateRoute path="/" component={Home}/>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
