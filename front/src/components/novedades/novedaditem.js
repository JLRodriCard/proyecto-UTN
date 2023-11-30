import React from 'react';

const novedaditem = (props) => {
    const { title, subtitle, imagen, body } = props;

    //ver novedades//

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img scr={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default novedaditem;
