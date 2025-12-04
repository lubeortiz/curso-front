import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({ initialError }) => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(initialError || false);

    useEffect(() => {
        const id = sessionStorage.getItem('id');
        const nombreUsuario = sessionStorage.getItem('usuario');

        if (id && nombreUsuario) {
            window.location.href = '/inicio';
        }
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        setError(false);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/admin/login`, { usuario, password });
            if (response.data.success) {
                console.log('Login exitoso. Redirigiendo...');
                sessionStorage.setItem('id', response.data.user.id);
                sessionStorage.setItem('usuario', response.data.user.nombre);
                window.location.href = '/inicio'; 
            } else {
                setError(true);
            }

        } catch (error) {
            console.error('Error durante el login:', error.response ? error.response.data : error.message);
            
            if (error.response && error.response.status === 401) {
                 setError(true);
            } else {
                setError(true);
            }
        }
    };

    return (
        <div className="">
            <div className="row" style={{ margin: '100px 0' }}>
                <div className="col">
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Usuario"
                                name="usuario"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Ingresar
                        </button>
                    </form>
                    {error && (
                        <p>Usuario y/o contraseña incorrectos.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;