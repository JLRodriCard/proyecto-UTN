import React from "react";

const Iniciopage = (props) => {
    return (

        <main className="holder">

            <div class="imagen_inicio">
                <img className="agrandar" src="imagenes/flota.jpg" alt="inicio" />

            </div>

            <div className="columnas">

                <div>
                    <h3>Logistica & distribución Rutas del Sol S.R.L.</h3>
                    <p>Somos una empresa de transporte Argentina con más de 60 años de experiencia nacional y 30 años en
                        transporte internacional. Con casa matriz en Buenos Aires y oficinas de representantes en Cordoba,
                        Mendoza, Sao Paulo, Asunción y Montevideo, trabajamos para ofrecer soluciones a medida en función de
                        las exigencias y necesidades de cada cliente en la región</p>

                </div>

                <div>

                </div>


            </div>

            <div className="columnas">
                <div className="objetivos">

                    <h3>TRANSPORTE INTERNACIONAL</h3>
                    <p>Garantizamos trasparencia y cumplimiento.</p>
                    <p>Nuestro objetivo: la satisfacción de nuestros clientes, grandes empresas a nivel nacional e
                        internacional.
                        Para esto contamos con sistemas de control satelital que permiten obtener información instantánea
                        sobre
                        posición y situación de la mercadería transportada, actualizando al cliente sobre ésta cada vez que
                        lo
                        requieran
                    </p>
                </div>

                <div>

                    <img className="foto_flexbox swing" src="imagenes/terminal.jpg" alt=" Rutas del Sol " />



                </div>

                <div className="nuestros_clientes">
                    <h3>¿POR QUÉ NUESTROS CLIENTES NOS ELIGEN?</h3>
                    <p>Con más de 100 unidades de transporte, equipo logístico y taller de mantenimiento propios, ofrecemos
                        un
                        servicio integral de importación y exportación, de tal forma que nuestra empresa abarca todo el
                        proceso
                        de
                        la operación, facilitando a nuestros clientes el tratamiento de la misma.</p>

                </div>



            </div>

            <div className="columnas">
                <div>
                    <h3>Nuestro Sello: Cumplimiento</h3>
                    <p>Nuestro núcleo es nuestra experiencia en transporte y una cultura de seguridad. Creemos que
                        brindarles a nuestros conductores la mejor capacitación, equipos y soporte, cimenta su camino y el
                        de nuestros clientes para el éxito en nuestros despachos.</p>
                </div>
            </div>

            <div className="columnas">
                <div>

                    <img className="img_div_servicios agrandar2 borde_index_img" src="imagenes/imagen_servicios.jpg" alt="inicio" />


                </div>


            </div>


        </main>
    );
}



export default Iniciopage;

