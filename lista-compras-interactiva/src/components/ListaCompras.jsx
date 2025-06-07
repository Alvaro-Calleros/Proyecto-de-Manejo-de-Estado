import { useState } from 'react';
import './ListaCompras.css'; 

function ListaCompras() {
  const [productos, setProductos] = useState([
    { id: 1, texto: "Leche" },
    { id: 2, texto: "Pan" },
    { id: 3, texto: "Huevos" },
  ]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      const productoNuevo = {
        id: Date.now(),
        texto: nuevoProducto.trim(),
      };
      setProductos([...productos, productoNuevo]);
      setNuevoProducto("");
    }
  };

  const eliminarProducto = (idAEliminar) => {
    const productosActualizados = productos.filter(
      (producto) => producto.id !== idAEliminar
    );
    setProductos(productosActualizados);
  };

  const manejarTeclaEnter = (evento) => {
    if (evento.key === "Enter") {
      agregarProducto();
    }
  };

  // El JSX que se renderiza es solo el de la lista de compras.
  return (
    <div className="lista-compras-container">
      <h1>📝 Mi Lista de Compras</h1>
      
      <div className="input-section">
        <input
          type="text"
          className="input-producto"
          placeholder="¿Qué necesitas comprar?"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
          onKeyDown={manejarTeclaEnter}
        />
        <button className="btn-agregar" onClick={agregarProducto}>
          Agregar
        </button>
      </div>

      {productos.length === 0 ? (
        <p className="mensaje-vacio">
          ¡Tu lista está vacía! Agrega algunos productos 🛒
        </p>
      ) : (
        <ul className="lista-productos">
          {productos.map((producto) => (
            <li key={producto.id} className="producto-item">
              <span className="producto-texto">{producto.texto}</span>
              <button
                className="btn-eliminar"
                onClick={() => eliminarProducto(producto.id)}
                title="Eliminar producto"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="resumen">
        <p>Total de productos: <strong>{productos.length}</strong></p>
      </div>
    </div>
  );
}

export default ListaCompras;