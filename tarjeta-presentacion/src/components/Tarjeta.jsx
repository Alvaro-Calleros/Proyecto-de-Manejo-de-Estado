import './Tarjeta.css';

function Tarjeta() {
  const nombre = "Álvaro Calleros Sánchez";
  const profesion = "Full Stack Developer";
  const mensaje = "If you do what you´ve always done, you´ll get what you´ve always gotten.";

  return (
    <div className="tarjeta">
      <img 
        src="./src/assets/alvaro.jpeg" 
        alt="Foto de perfil de Álvaro Calleros Sánchez" 
        className="tarjeta-avatar"
      />
      
      <div className="tarjeta-info">
        <h2 className="tarjeta-nombre">{nombre}</h2>
        <h4 className="tarjeta-profesion">{profesion}</h4>
        <p className="tarjeta-mensaje">{mensaje}</p>
      </div>
    </div>
  );
}

export default Tarjeta;