import "./App.css";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Privacy from "./components/Privacy";
import Terms_Conditions from "./components/Terms&Conditions";
import Pricing from "./components/Pricing";
import Home from "./components/Home";
import IntroductionPage from "./components/IntroductionPage";
import MeetTheTeam from "./components/MeetTheTeam";

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <Router>
                <AuthProvider>
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <PrivateRoute exact path="/update" component={UpdateProfile} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />
                        <Route exact path="/privacy" component={Privacy} />
                        <Route exact path="/pricing" component={Pricing} />
                        <Route exact path="/terms&conditions" component={Terms_Conditions} />
                        <Route exact path="/introduction" component={IntroductionPage} />
                        <Route exact path="/team" component={MeetTheTeam} />
                        <Route path="/home" component={Home} />
                    </Switch>
                </AuthProvider>
            </Router>
        </AuthProvider>
    );
}

export default App;
