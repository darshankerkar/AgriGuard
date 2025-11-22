import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { DiagnosisProvider } from './context/DiagnosisContext';
import MainLayout from './components/Layouts/MainLayout';
import HomePage from './pages/HomePage';
import DiagnosisPage from './pages/DiagnosisPage';
import ResultsPage from './pages/ResultsPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import HelpPage from './pages/HelpPage';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <AppProvider>
                <DiagnosisProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
                            <Route path="/results" element={<MainLayout><ResultsPage /></MainLayout>} />
                            <Route path="/help" element={<MainLayout><HelpPage /></MainLayout>} />
                            <Route path="/profile" element={<MainLayout><ProfilePage /></MainLayout>} />
                            <Route path="/diagnosis" element={<DiagnosisPage />} />
                            <Route path="/dashboard" element={<DashboardPage />} />
                        </Routes>
                    </Router>
                </DiagnosisProvider>
            </AppProvider>
        </AuthProvider>
    );
}

export default App;
