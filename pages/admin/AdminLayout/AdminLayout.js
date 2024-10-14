import React from "react";
import AuthMiddleware from "../../../middleware/AuthMiddleware";
import AdminNavbar from "../../../components/Layouts/Sidebar/AdminNavbar";
const AdminLayout = ({ children }) => {
  return (
    <>
      <AuthMiddleware>
        <AdminNavbar />
        {children}
      </AuthMiddleware>
    </>
  );
};

export default AdminLayout;
