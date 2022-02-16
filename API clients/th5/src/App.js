import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User";
import UserDetail from "./components/UserDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user/add" element={<UserDetail />} />
          <Route path="/user/:userId" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
