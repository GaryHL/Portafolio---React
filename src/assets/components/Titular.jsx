import React from 'react';


function Titular (props)  {
return (
    <div className="container_titular">
      <h1 className="titulo_txt">{props.texto}</h1>
      <div className="red_line1"></div>
      <div className="red_line2"></div>
      <h2 className="description">{props.description}</h2>
    </div>
)
}

export default Titular;