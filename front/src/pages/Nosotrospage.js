import { useState, useEffect } from "react";
import axios from 'axios';
import novedaditem from '../components/novedades/novedaditem';


const Nosotrospage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {

        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);

        };

        cargarNovedades();
    }, []);


    return (

        <div className="novedad_nosotros">
            <section className="holder">
                <h2>Nuestras Novedades</h2>
                {
                    loading ? (
                        <p> Cargando Novedades...</p>
                    ) : (
                        novedades.map(item => <novedaditem key={item.id}
                            title={item.titulo} subtitle={item.subtitulo}
                            imagen={item.imagen} body={item.cuerpo} />)

                    )

                }
            </section>

        </div>

    )

};

//<main className="holder">

//<div className="historia">
//<h3> NUESTRA HISTORIA</h3>

//<p>

//Somos una empresa de transporte Argentina con más de 60 años de experiencia nacional y 30 años en
// transporte internacional. Con casa matriz en Buenos Aires y oficinas de representantes en Cordoba,
//Mendoza, Sao Paulo, Asunción y Montevideo, trabajamos para ofrecer soluciones a medida en función de
//las exigencias y necesidades de cada cliente en la región.
// Nos caracterizamos por nuestro servicio de excelencia en logistica integral, brindamos soluciones tanto para transporte terrestre, multimodal, forwarder y almacenaje de mercancias.


//</p>

//</div>


//<h3> NOVEDADES</h3>

//<div className="novedades">
//<h3>Almacenaje interportuario</h3>
//<p> Proximamente estaremos inaugurando nuestros depositos en terminales portuarias de Buenos Aires y Puerto de Montevideo.</p>

// </div>
// <div className="novedades">
//<h3>Nuevos equipos</h3>
//<p> Renovamos nuestra flota con los mejores equipos del mercado, con mayor tecnologia y seguridad para cumplir con un servicio de mejor calidad.</p>

// </div>
// <div className="novedades">
//<h3>Incorporamos tecnología en Logistica</h3>
//<p> Hemos incorporado tecnologías de rastreo satelital en todas nuestras unidades y sistemas de seguimiento de ultima generacion.</p>

//  </div>
// <div className="novedades">
//  <h3>Contribuimos con la Ecologia</h3>
//  <p> A partir del año 2022 hemos incorporado a nuestra flota equipos electricos, contibuyendo al cuidado del planeta.</p>

//  </div>

// </main>

export default Nosotrospage;