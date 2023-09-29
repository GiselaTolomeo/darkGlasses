import React from "react";
import Form from "../../Form/Form/Form";
import BotonCondicional from "../../BotonCondicional/BotonCondicional";


const AboutUs = () => {
  return (
    <>
      <h2>ABOUT US</h2>
      <h3>Sos miembro de nuestro Circulo?</h3>
      <h4>Iniciá Sesión</h4>
      <BotonCondicional/>
      <h4>DEJANOS TU COMENTARIO</h4>
      <Form/>
    </>
  );
};

export default AboutUs;
