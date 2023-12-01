import { useState } from "react";

//import React from "react";

import axios from 'axios';

const Cotizadorpage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''

    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (

        <main className=" holder contacto">
            <div>

                <h2> Contactenos para cotizar servicio</h2>

                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>

                    <p className="acciones"><input type="submit" value="Enviar" /></p>


                </form>

            </div>
            <div className="datos">
                <h2> Otras vias de comunicación</h2>
                <p> Contacte a nuestro equipo de Customer Service por los siguientes medios</p>
                <ul>
                    <li> TELEFONOS</li>
                    <li>+054 01115325641</li>
                    <li>+054 01115325645</li>
                    <li>+054 02322 426532</li>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>linkedin</li>


                </ul>

            </div>


        </main >

    );
}

export default Cotizadorpage;
