import React from "react";

const Cotizadorpage=(props)=> {
    return(

        <main className=" holder contacto">
        <div>

            <h2> Contactenos para cotizar servicio</h2>

            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar" />
                </p>


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


    </main>

    );
}

export default Cotizadorpage;
