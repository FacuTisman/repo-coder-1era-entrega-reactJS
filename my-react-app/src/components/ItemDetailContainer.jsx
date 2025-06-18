import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const productos = [
      { id: "1", nombre: "Hamburguesa Clásica", descripcion: "Con cheddar y panceta" },
      { id: "2", nombre: "Loaded Fries BBQ", descripcion: "Con cheddar, verdeo y BBQ" },
      { id: "3", nombre: "Trago Mojito", descripcion: "Con ron y menta fresca" },
    ];

    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(productos.find((prod) => prod.id === itemId));
      }, 1000);
    });

    promesa.then((res) => setItem(res));
  }, [itemId]);

  return (
    <div>
      {item ? (
        <>
          <h2>{item.nombre}</h2>
          <p>{item.descripcion}</p>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
