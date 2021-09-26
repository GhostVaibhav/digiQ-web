import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Privacy from "./components/Privacy";
import Terms_Conditions from "./components/Terms&Conditions";
import Pricing from "./components/Pricing";

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <Router>
                <AuthProvider>
                    <Switch>
                        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                        <PrivateRoute exact path="/update" component={UpdateProfile}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/forgot-password" component={ForgotPassword}/>
                        <Route exact path="/privacy" component={Privacy}/>
                        <Route exact path="/pricing" component={Pricing}/>
                        <Route exact path="/terms&conditions" component={Terms_Conditions}/>
                    </Switch>
                </AuthProvider>
            </Router>
        </AuthProvider>
    );
}

export default App;
