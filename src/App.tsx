import React, { FC } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { useActions } from './hooks/useActions';

const App: FC = () => {
  const {  setIsAuth } = useActions();
  React.useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);
  return (
        <AppRouter />
  );
};

export default App;
