import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecetaItem from '../pages/recetas/RecetaItem';

const MisRecetasPage = () => {
  const [loading, setLoading] = useState(false);
  const [recetas, setRecetas] = useState([]);

  const initialForm = {
    id: '',
  }

  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const cargarRecetas = async () => {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/recetas/` + formData.id);
      setRecetas(response.data);
      setLoading(false);
    };
    cargarRecetas();
  }

  return (
    <section className="holder">
      <h2>Mis Recetas</h2>
      <form action="/contacto" method='post' className="formulario" onSubmit={handleSubmit}>
        <p>
          <label>Ingrese su id: </label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </p>

        <p className="centrar"><input type="submit" value="Enviar" /></p>
      </form>
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
            imagen={item.imagen} />
        )
      )}
    </section>
  );
};

export default MisRecetasPage;
