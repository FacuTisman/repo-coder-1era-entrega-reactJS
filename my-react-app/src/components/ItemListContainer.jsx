import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productos = [
      { id: "1", nombre: "Hamburguesa Clásica", categoria: "hamburguesas" },
      { id: "2", nombre: "Loaded Fries BBQ", categoria: "papas" },
      { id: "3", nombre: "Trago Mojito", categoria: "tragos" },
      { id: "4", nombre: "Hamburguesa Doble", categoria: "hamburguesas" },
    ];

    const promesa = new Promise((res) => {
      setTimeout(() => {
        if (categoryId) {
          res(productos.filter((prod) => prod.categoria === categoryId));
        } else {
          res(productos);
        }
      }, 1000);
    });

    promesa.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "1rem" }}>
            <h3>{item.nombre}</h3>
            <Link to={`/item/${item.id}`}>
              <button>Ver más detalles</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
