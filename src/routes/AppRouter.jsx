import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import PrivateRoutes from "./PrivateRoutes";

export const AppRouter = () => {
  //'checking' | 'authenticated' | 'no-authenticated'
  const status = "authenticated";

  if (status === "checking") {
    return <div className="loading">Checking credentials...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : (
          <Route path="login" element={<LoginPage />} />
        )}

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
