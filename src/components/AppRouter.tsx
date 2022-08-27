import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Login from '../pages/Login';
import MainProfile from '../pages/MainProfile';





const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.authReducer);


  return (
    <Routes>
      <Route path="*" element={<Navigate to="/profile" />} />
      <Route path="/login" element={isAuth ? <Navigate to="/profile" /> : <Login />} />
      <Route path="/profile" element={isAuth ? <MainProfile /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;