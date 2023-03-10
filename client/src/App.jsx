import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';

import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './utils/theme';

const App = () => {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/:username" element={<Profile />} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;