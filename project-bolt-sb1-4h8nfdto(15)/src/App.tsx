import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { GoalsProvider } from './contexts/GoalsContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import RecipeLibrary from './pages/RecipeLibrary';
import History from './pages/History';
import Settings from './pages/Settings';
import './styles/theme.css';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GoalsProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route
              path="/recipes"
              element={
                <Layout>
                  <RecipeLibrary />
                </Layout>
              }
            />
            <Route
              path="/history"
              element={
                <Layout>
                  <History />
                </Layout>
              }
            />
            <Route
              path="/settings"
              element={
                <Layout>
                  <Settings />
                </Layout>
              }
            />
          </Routes>
        </GoalsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
