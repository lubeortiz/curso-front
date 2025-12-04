import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecetaItem from '../pages/recetas/RecetaItem';

const RecetasPage = () => {
  const [loading, setLoading] = useState(false);
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const id = sessionStorage.getItem('id');
    const nombreUsuario = sessionStorage.getItem('usuario');

    if (!id && !nombreUsuario) {
      window.location.href = '/login';
    }

    const cargarRecetas = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/recetas');
      setRecetas(response.data);
      setLoading(false);
    };
    cargarRecetas();
  }, []);

  return (
    <section className="holder">
      <h2>Recetas</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        recetas.map(item => 
        <RecetaItem key={item.id}
                    titulo={item.titulo} 
                    descripcion={item.descripcion}
                    ingredientes={item.ingredientes} // OBJETO JSON
                    instrucciones={item.instrucciones}
                    tiempo={item.tiempo}
                    categoria={item.categoria}
                    imagen={item.imagen}/>
        )
      )}
    </section>
  );
};

export default RecetasPage;
