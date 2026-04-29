const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

// Encriptar contraseña antes de guardar
userSchema.pre('save', async function() {
    // Si la contraseña no ha sido cambiada, no hacemos nada
    if (!this.isModified('password')) return;

    // Encriptación
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
    // NOTA: Al ser una función async, no necesitamos llamar a next()
});

module.exports = mongoose.model('User', userSchema);