import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "../components/UserList/UserList";
import UserDetail from "../components/UserDetail/UserDetail";
import CreateUser from "../components/CreateUser/CreateUser";
import EditUser from "../components/EditUser/EditUser";

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="users/new" element={<CreateUser />} />
        <Route path="users/:id/edit" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
