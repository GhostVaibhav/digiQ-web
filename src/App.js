import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route exact path="/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch>
                </AuthProvider>
            </Router>
        </AuthProvider>
    );
}

export default App;
