import React from "react";
const Footer = (props) => {
    return (
        <footer>

            <h5>SEGUINOS EN REDES</h5>
            <ul class="redes-sociales">
                <li>
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="imagenes/facebook-icon.png" alt="facebook" /> </a>
                </li>

                <li> <a href="https://www.linkedin.com" target="_blank">
                    <img src="imagenes/linkedin-icon.png" alt="linkedIn" />

                </a>
                </li>

                <li><a href="http://www.instagram.com" target="_blank">
                    <img src="imagenes/instagram-icon.png" alt="dribble" /> </a>
                </li>


            </ul>






            <ul>
                <ul class="horarios">
                    <li class="infofooter">HORARIOS DE ATENCION</li>
                    <li class="infofooter">Lunes a viernes de 8:30 a 17:30 hs</li>
                    <li class="infofooter">Sabado y feriados de 8:30 a 12:hs</li>
                </ul>

            </ul>


            <ul>
                <ul class="telefonos">
                    <li class="infofooter">TELEFONOS</li>
                    <li class="infofooter">+054 01115325641</li>
                    <li class="infofooter">+054 01115325645</li>
                    <li class="infofooter">+054 02322 426532</li>
                </ul>


            </ul>








            <p> © Copyright derechos reservados, Logistica & distribución Rutas del Sol S.R.L.</p>


        </footer>


    );
}

export default Footer;