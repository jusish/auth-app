import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import AdminDashboardPage from "./pages/adminDashboard";
import UserGreetingPage from "./pages/userGreeting";
import { isLoggedIn } from "./utils/auth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/adminDashboard"
          element={
            isLoggedIn() ? <AdminDashboardPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/userGreeting"
          element={
            isLoggedIn() ? <UserGreetingPage /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
