const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const auth = require('../middleware/auth');

// Obtener todas las citas del usuario logueado
router.get('/', auth, async (req, res) => {
    try {
        const appointments = await Appointment.find({ user: req.user.id }).sort({ date: 1 });
        res.json(appointments);
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
});

// Crear una cita
router.post('/', auth, async (req, res) => {
    try {
        const { date, time, description } = req.body;
        const newAppointment = new Appointment({
            user: req.user.id,
            date,
            time,
            description
        });
        const appointment = await newAppointment.save();
        res.json(appointment);
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
});

// Editar una cita (Omitido el try/catch completo por brevedad, pero asegúrate de validar que req.user.id coincida con appointment.user)
router.put('/:id', auth, async (req, res) => {
    let appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ msg: 'Cita no encontrada' });
    if (appointment.user.toString() !== req.user.id) return res.status(401).json({ msg: 'No autorizado' });

    appointment = await Appointment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(appointment);
});

// Eliminar una cita
router.delete('/:id', auth, async (req, res) => {
    let appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ msg: 'Cita no encontrada' });
    if (appointment.user.toString() !== req.user.id) return res.status(401).json({ msg: 'No autorizado' });

    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Cita eliminada' });
});

module.exports = router;