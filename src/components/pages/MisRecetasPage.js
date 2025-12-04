import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecetaItem from '../pages/recetas/RecetaItem';

const MisRecetasPage = () => {
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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/recetas/`+ id);
      setRecetas(response.data);
      setLoading(false);
    };
    cargarRecetas();
  }, []);

  return (
    <section className="holder">
      <h2>Mis Recetas</h2>
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

export default MisRecetasPage;
