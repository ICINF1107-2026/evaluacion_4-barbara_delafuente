import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { FormErrors, FormValues } from '../../types';
import './ContactForm.css';

const initialValues: FormValues = { nombre: '', correo: '', mensaje: '' };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.nombre.trim().length < 2) {
    errors.nombre = 'Escribe tu nombre (mínimo 2 caracteres).';
  }
  if (!/^\S+@\S+\.\S+$/.test(values.correo)) {
    errors.correo = 'Escribe un correo válido, por ejemplo nombre@correo.cl.';
  }
  if (values.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setValues(initialValues);
    } else {
      setSent(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="nombre">Nombre</label>
        <input
          className="contact-form__input"
          id="nombre"
          name="nombre"
          type="text"
          value={values.nombre}
          onChange={handleChange}
          aria-invalid={Boolean(errors.nombre)}
          aria-describedby={errors.nombre ? 'error-nombre' : undefined}
        />
        {errors.nombre && <p className="contact-form__error" id="error-nombre">{errors.nombre}</p>}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="correo">Correo</label>
        <input
          className="contact-form__input"
          id="correo"
          name="correo"
          type="email"
          value={values.correo}
          onChange={handleChange}
          aria-invalid={Boolean(errors.correo)}
          aria-describedby={errors.correo ? 'error-correo' : undefined}
        />
        {errors.correo && <p className="contact-form__error" id="error-correo">{errors.correo}</p>}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="mensaje">Mensaje</label>
        <textarea
          className="contact-form__input"
          id="mensaje"
          name="mensaje"
          rows={5}
          value={values.mensaje}
          onChange={handleChange}
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
        />
        {errors.mensaje && <p className="contact-form__error" id="error-mensaje">{errors.mensaje}</p>}
      </div>

      <button className="contact-form__button" type="submit">Enviar mensaje</button>
      <p className="contact-form__feedback" aria-live="polite">
        {sent ? 'Mensaje enviado correctamente. ¡Gracias por escribirme!' : ''}
      </p>
    </form>
  );
}
