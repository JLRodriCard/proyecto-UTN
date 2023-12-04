import { useState, useEffect } from "react";
import axios from 'axios';
import Novedadesitem from '../components/novedades/Novedadesitem';


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
                        novedades.map(item => <Novedadesitem key={item.id}
                            title={item.titulo} subtitle={item.subtitulo}
                            imagen={item.imagen} body={item.cuerpo} />)

                    )

                }
            </section>

        </div>

    )

};

export default Nosotrospage;