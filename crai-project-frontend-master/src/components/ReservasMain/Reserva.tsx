import React, { useEffect, useState } from 'react';
import { Reserva } from '../../interfaces/Reserva';
import ReservaCards from '../ReservaCard/ReservaCards';
import Header from '../Header/Header';
import './Reserva.css';
import { apiConnection } from './../../api/apiConnection';
import { Resolver } from 'dns';

const ReservaMain = () => {
  const [reserva, setReserva] = useState<Reserva[]>([]);
  useEffect(() => {
    const getAllReserva = async () => {
      try {
        const response = await apiConnection.get<Reserva[]>(
          'reserva/get-all-reservas'
        );
        if (!response.data) {
          return;
        }
        setReserva(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllReserva();
  }, []);
  return (
    <>
    <Header />
    <div className="card-container">
      {
        reserva.map((reservaciones:Reserva) => <ReservaCards key={reservaciones._id} reservaciones={reservaciones} />)
      }
    </div>
  </>
);
};

export default ReservaMain;