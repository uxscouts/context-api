// ThemeContext.js
import { createContext, useState } from 'react';

// 1. Initialize Context
export const TimeContext = createContext();

// 2. Create a Provider Component
export const TimeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <TimeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </TimeContext.Provider>
  );
};