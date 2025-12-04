import React from 'react';

const RecetaItem = (props) => {
    const { 
        titulo, 
        descripcion, 
        ingredientes, 
        instrucciones, 
        tiempo, 
        categoria, 
        imagen 
    } = props;

    const renderIngredientes = () => {
        if (!ingredientes) return <p>No hay ingredientes listados.</p>;

        return (
            <ul className="list-group list-group-flush">
                {Object.entries(ingredientes).map(([clave, valor]) => (
                    <li key={clave} className="list-group-item d-flex justify-content-between align-items-center">
                        {clave.charAt(0).toUpperCase() + clave.slice(1)}:
                        <span className="badge bg-secondary rounded-pill">{valor}</span>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="card mb-4 shadow-sm" style={{ border: 'none', borderRadius: '15px' }}>
            
            {imagen && (
                <img 
                    src={imagen} 
                    className="card-img-top" 
                    alt={titulo} 
                    style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} 
                />
            )}
            
            <div className="card-body p-4">
                <h3 className="card-title">{titulo}</h3>
                
                <div className="d-flex justify-content-between align-items-center mb-3 text-muted border-bottom pb-2">
                    <span className="badge bg-info text-dark">
                        <i className="bi bi-tag-fill me-1"></i> Categoría: {categoria}
                    </span>
                    <span className="badge bg-warning text-dark">
                        <i className="bi bi-clock-fill me-1"></i> Tiempo: {tiempo} min
                    </span>
                </div>
                
                <p className="card-text lead">{descripcion}</p>

                <div className="row mt-4">
                    <div className="col-md-5">
                        <h4 className="border-bottom pb-2 text-secondary">Ingredientes</h4>
                        {renderIngredientes()}
                    </div>
                    
                    <div className="col-md-7">
                        <h4 className="border-bottom pb-2 text-secondary">Instrucciones</h4>
                        <p className="text-muted">{instrucciones}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecetaItem;