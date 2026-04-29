import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Trash2, Plus, Calendar as CalendarIcon, Clock, AlignLeft } from 'lucide-react';

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [form, setForm] = useState({ description: '', date: '', time: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCitas = async () => {
            try {
                const res = await api.get('/appointments');
                setAppointments(res.data.data || res.data);
            } catch (err) {
                console.error("Error fetching", err);
            } finally {
                setLoading(false);
            }
        };
        fetchCitas();
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await api.post('/appointments', form);
            setForm({ description: '', date: '', time: '' });
            // Recargar citas después de agregar
            const res = await api.get('/appointments');
            setAppointments(res.data.data || res.data);
        } catch (err) {
            console.error("Error adding", err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Está seguro de eliminar esta cita?")) {
            try {
                await api.delete(`/appointments/${id}`);
                // Recargar citas después de eliminar
                const res = await api.get('/appointments');
                setAppointments(res.data.data || res.data);
            } catch (err) {
                console.error("Error deleting", err);
            }
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Sidebar Lateral Estilizada */}
            <aside className="hidden md:flex w-64 flex-col bg-white border-r border-slate-200">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-indigo-600 tracking-tight flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">C</div>
                        CitaMed
                    </h2>
                </div>
                <nav className="flex-1 px-4 space-y-1">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
                        <CalendarIcon size={20} /> Dashboard
                    </a>
                </nav>
            </aside>

            {/* Contenido Principal */}
            <main className="flex-1 p-8">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800">Panel de Gestión</h1>
                        <p className="text-slate-500">Administra tus citas y horarios profesionales.</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Formulario de Nueva Cita */}
                    <section className="lg:col-span-2">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                                <Plus size={18} className="text-indigo-600" /> Nueva Cita
                            </h3>
                            <form onSubmit={handleAdd} className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-slate-700 mb-1 block">Motivo/Descripción</label>
                                    <div className="relative">
                                        <AlignLeft className="absolute left-3 top-3 text-slate-400" size={18} />
                                        <input 
                                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                                            placeholder="Ej: Revisión Técnica"
                                            value={form.description}
                                            onChange={(e) => setForm({...form, description: e.target.value})}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-slate-700 mb-1 block">Fecha</label>
                                        <input 
                                            type="date" 
                                            className="w-full p-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                            value={form.date}
                                            onChange={(e) => setForm({...form, date: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-slate-700 mb-1 block">Hora</label>
                                        <input 
                                            type="time" 
                                            className="w-full p-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                            value={form.time}
                                            onChange={(e) => setForm({...form, time: e.target.value})}
                                            required
                                        />
                                    </div>
                                </div>
                                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition shadow-md shadow-indigo-100">
                                    Confirmar Cita
                                </button>
                            </form>
                        </div>
                    </section>

                    {/* Listado de Citas */}
                    <section className="lg:col-span-2">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-slate-100">
                                <h3 className="text-lg font-semibold">Próximas Actividades</h3>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {loading ? (
                                    <div className="p-10 text-center text-slate-400">Cargando datos...</div>
                                ) : appointments.length > 0 ? (
                                    appointments.map(cita => (
                                        <div key={cita._id} className="p-5 hover:bg-slate-50 transition flex items-center justify-between group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex flex-col items-center justify-center text-indigo-600 border border-indigo-100">
                                                    <span className="text-xs font-bold uppercase">{new Date(cita.date).toLocaleString('default', { month: 'short' })}</span>
                                                    <span className="text-lg font-extrabold leading-none">{new Date(cita.date).getDate()}</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-800">{cita.description}</h4>
                                                    <div className="flex gap-4 mt-1">
                                                        <span className="text-sm text-slate-500 flex items-center gap-1">
                                                            <Clock size={14} /> {cita.time}
                                                        </span>
                                                        <span className="text-sm text-slate-500 flex items-center gap-1">
                                                            <CalendarIcon size={14} /> {new Date(cita.date).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => handleDelete(cita._id)}
                                                className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-20 text-center">
                                        <p className="text-slate-400 italic">No tienes citas programadas.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;