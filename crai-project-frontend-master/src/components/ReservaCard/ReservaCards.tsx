import React, { useEffect, useState } from 'react';
import { Reserva } from '../../interfaces/Reserva';
import Header from '../Header/Header';
import './ReservaCard.css';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';


interface ReservaProps {
    reservaciones: Reserva;
  }

const ReservaCards = ({ reservaciones }: ReservaProps) => { 

  return (
    <>
      <Card className="card">
        <CardContent className="content-card">
        Fecha: 
          <p className="title-card">     
          20/12/2023 14:00
            </p>

          Nombre: 
          <p className="title-card">     
          {reservaciones.nombre}
            </p>
          
          Apellido: 
          <p className="title-card">
            {reservaciones.apellido}
          </p>
          
          Numero de Cuenta
          <p className="title-card">
            {reservaciones.numcuenta}
          </p>

          Horas Reservadas
          <p className="title-card">
            {reservaciones.horas_reservadas}
          </p>

          Integrantes
          <p className="title-card">
            {reservaciones.integrantes}
          </p>

        </CardContent>

        <CardActions className="card-actions">
          <Button variant="contained" className="button-card">
            Cancelar Reserva
          </Button>
        </CardActions>
       
      </Card>
    </>
  );
    }
    export default ReservaCards;