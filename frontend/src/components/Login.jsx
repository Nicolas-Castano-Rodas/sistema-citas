import { useState } from 'react';
import api from '../api/axios';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            alert('¡Bienvenido!');
        } catch {
            alert('Error en las credenciales');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-10">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg shadow-indigo-200">
                        C
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 italic">Bienvenido</h2>
                    <p className="text-slate-500 mt-2">Ingresa a tu portal de gestión corporativa</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="text-sm font-semibold text-slate-700 ml-1">Correo Corporativo</label>
                        <input 
                            type="email" 
                            className="w-full mt-1 px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none bg-slate-50/50 transition"
                            placeholder="nombre@empresa.com"
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-slate-700 ml-1">Contraseña</label>
                        <input 
                            type="password" 
                            className="w-full mt-1 px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none bg-slate-50/50 transition"
                            placeholder="••••••••"
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button className="w-full bg-slate-900 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition duration-300 shadow-lg">
                        Iniciar Sesión
                    </button>
                </form>
                <p className="mt-8 text-center text-sm text-slate-400">
                    &copy; 2026 CitaMed S.A. Todos los derechos reservados.
                </p>
            </div>
        </div>
    );
};

export default Login;