import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {token && (
        <nav className="bg-white p-4 shadow-sm flex justify-between items-center">
          <span className="font-bold text-blue-600">Sistema de Gestión</span>
          <button onClick={logout} className="text-sm text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-50">
            Cerrar Sesión
          </button>
        </nav>
      )}
      
      {!token ? <Login setToken={setToken} /> : <Dashboard />}
    </div>
  );
}

export default App;