import React from "react";

const Serviciospage = (props) => {
    return (

        <main className="holder">

            <div className="columnas_servicios">

                <div className="imagen_servicios">
                    <h3>Transportamos Liquidos</h3>

                    <img className="swing" src="imagenes/camion cisterna.jpg" alt="inicio" />

                </div>

                <div className="imagen_servicios">
                    <h3>cargas internacionales</h3>
                    <img className="swing" src="imagenes/camion_sol.jpg" alt="inicio" />

                </div>

                <div className="imagen_servicios">
                    <h3>Servicios de Almacenaje</h3>
                    <img class="swing" src="imagenes/depositos.jpg" alt="inicio" />

                </div>

                <div className="imagen_servicios">
                    <h3>Forwarders</h3>
                    <img className="swing" src="imagenes/forwarder.jpg" alt="inicio" />

                </div>



            </div>


            <div className="columnas_servicios">

                <div className="forwarder">
                    <h3>AGENTE DE CARGAS</h3>
                    <p>Nuestro propósito es brindar soluciones personalizadas a las necesidades de cada cliente. Somos una empresa que combina un equipo de jóvenes profesionales con una red de reconocidos agentes en las principales ciudades del mundo. De esta forma nuestro asesoramiento en logística, apunta a mejorar  sus ratios de costes en la cadena productiva y el oportuno posicionamiento de sus cargas.</p>

                </div>

                <div className="imagen_servicios">
                    <h4>CARGAS REFRIGERADAS</h4>
                    <img className="foto_flexbox_servicos" src="imagenes/camion_violeta.jpg" alt="inicio" />

                </div>

                <div>

                </div>


            </div>

            <div className="columnas">
                <div className="objetivos">

                    <h3>TRANSPORTE DE CARGAS PELIGROSAS</h3>
                    <p>Garantizamos seguridad en el Transporte de cargas IMO.</p>
                    <p> Contamos con mas de 30 años de experiencia transportando cargas peligrosas en territorio nacional y Mercosur.
                        Nuestros choferes estan altamente calificados para llevar su mercancia desde el site de su empresa hasta el cliente.

                    </p>
                </div>

                <div>

                    <img className="cargas_peligrosas" src="imagenes/Camion-isotanque.jpg" alt=" Rutas del Sol " />



                </div>

                <div className="nuestros_clientes">
                    <h3>TRANSPORTE DE CARGAS ESPECIALES</h3>
                    <p> Contamos con equipos para transporte de cargas especiales, tanto liquidas como solidas.
                        contamos con semirremolques de dimensiones especiales, adaptadas a la medida de las necesides para cargas de gran porte y medidas fuera de standard.
                    </p>

                </div>



            </div>

            <div className="columnas">
                <div className="depositos">
                    <h3>DEPOSITOS Y ALMACENES ADAPTADOS A SUS NECESIDADES</h3>
                    <p>Contamos con depósitos en zonas francas y en zona de complejos industriales del conurbano Bonaerense e interior de la provincia de Buenos Aires.
                        Depositos que cumplen con normas ISO 9001 y habilitados para almacenaje de todo tipo de mercaderias, tantos generales como peligrosas.
                        Brindamos servicios de logistica y almacenaje, carga y descarga de contenedores.
                        Nos adaptamos a las necesidades de su empresa.
                    </p>
                </div>
            </div>



        </main>
    );
}

export default Serviciospage;