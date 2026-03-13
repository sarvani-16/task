import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Status from "./pages/Status";
import Settings from "./pages/Settings"
import Account from "./pages/Account";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/status" element={<Status />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;