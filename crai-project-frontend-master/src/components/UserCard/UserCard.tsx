import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './UserCard.css';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { Users } from '../../interfaces/Users';


interface UsersProps {
    usuarios: Users;
  }

const UserCards = ({ usuarios }: UsersProps) => { 

  return (
    <>
      <Card className="card">
        <CardContent className="content-card">

          Nombre: 
          <p className="title-card">     
          {usuarios.nombre}
            </p>
          
          Apellido: 
          <p className="title-card">
            {usuarios.apellido}
          </p>
          
          Numero de Cuenta
          <p className="title-card">
            {usuarios.numcuenta}
          </p>

          Nombre de Usuario
          <p className="title-card">
            {usuarios.username}
          </p>

          Admin?
          <p className="title-card">
          <input type="checkbox" checked={usuarios.isAdmin} readOnly/>
          </p>

        </CardContent>

        <CardActions className="card-actions">
          <Button variant="contained" className="button-card">
            Eliminar Usuario
          </Button>
          <Button variant="contained" className="button-card">
            Editar Usuario
          </Button>
        </CardActions>
       
      </Card>
    </>
  );
    }
    export default UserCards;