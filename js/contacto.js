const handleSubmit = (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const mensajeDiv = document.getElementById('mensaje-resultado');
    
    if (!nombre || !email || !asunto || !mensaje) {
        mensajeDiv.innerHTML = '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">Por favor, complete todos los campos del formulario.</div>';
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensajeDiv.innerHTML = '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">Por favor, ingrese un email válido.</div>';
        return;
    }
    
    mensajeDiv.innerHTML = `<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">Gracias por su contacto ${nombre}, en breve le estaré respondiendo.</div>`;
    
    document.getElementById('form-contacto').reset();
};

document.getElementById('form-contacto').addEventListener('submit', handleSubmit); 