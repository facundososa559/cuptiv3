import React, { useState } from 'react';
import Input from './Input';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    servicio: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple
    if (!formData.nombre || !formData.email || !formData.servicio) {
      setStatus('Por favor completa todos los campos requeridos.');
      return;
    }

    try {
      // Convertir a URLSearchParams para x-www-form-urlencoded
      const formBody = new URLSearchParams(formData);

      const res = await fetch('https://cupti.com.uy/sendMail.php', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString()
      });

      const data = await res.json();

      if (data.success) {
        setStatus('Mensaje enviado con éxito!');
        setFormData({ nombre: '', telefono: '', email: '', servicio: '' });
      } else {
        setStatus('Error al enviar el mensaje. Intenta nuevamente.');
      }
    } catch (err) {
      setStatus('Error de conexión.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-(--spacing-sm) md:w-1/2'>
      <Input label="Nombre" inputType="text" inputName="nombre" inputId="nombre" value={formData.nombre} onChange={handleChange} />
      <Input label="Teléfono" inputType="text" inputName="telefono" inputId="telefono" value={formData.telefono} onChange={handleChange} />
      <Input label="E-mail" inputType="email" inputName="email" inputId="email" value={formData.email} onChange={handleChange} />
      <Input label="Servicio de interés" inputType="select" inputName="servicio" inputId="servicio" value={formData.servicio} onChange={handleChange} options={['Eficiencia energética', 'Energías renovables', 'Ingeniería industrial']} />
      <button type="submit" className='bg-(--secondary) hover:bg-(--accent) text-(--light)'>Enviar</button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default ContactForm;
