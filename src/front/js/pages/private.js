import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className="mb-4">Área Privada</h2>
      {sessionStorage.getItem('token') ? (
        <p className="text-success mb-4">Bienvenido a tu área privada. Estás autenticado.</p>
      ) : (
        <p className="text-danger mb-4">No estás autenticado. Debes iniciar sesión.</p>
      )}
      <button className="btn btn-primary" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Private;
