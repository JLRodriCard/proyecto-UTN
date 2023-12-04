import React from 'react';

const Novedadesitem = (props) => {
    const { title, subtitle, imagen, body } = props;

    //ver novedades//

    return (
        <div className="novedades">
            <h1 className='titulo_novedad'>{title}</h1>
            <h3 className='subtitulo_novedad'>{subtitle}</h3>
            <img src={imagen} className='fotos_novedad'/>
            <div dangerouslySetInnerHTML={{ __html: body }} className='desarrollo_novedad'/>
            <hr />
        </div>
    );
}

export default Novedadesitem;
