import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/layout/Layout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import RecipeLibrary from './pages/RecipeLibrary';
import History from './pages/History';
import Settings from './pages/Settings';
import { GoalsProvider } from './contexts/GoalsContext';
import './styles/theme.css';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <GoalsProvider>
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/" element={
                <PrivateRoute>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </PrivateRoute>
              } />
              <Route path="/recipes" element={
                <PrivateRoute>
                  <Layout>
                    <RecipeLibrary />
                  </Layout>
                </PrivateRoute>
              } />
              <Route path="/history" element={
                <PrivateRoute>
                  <Layout>
                    <History />
                  </Layout>
                </PrivateRoute>
              } />
              <Route path="/settings" element={
                <PrivateRoute>
                  <Layout>
                    <Settings />
                  </Layout>
                </PrivateRoute>
              } />
            </Routes>
          </GoalsProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}