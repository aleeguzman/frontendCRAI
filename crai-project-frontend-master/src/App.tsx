import React from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Room from './components/Room/Room';
import { ReservationForm } from './components/ReservationForm/ReservationForm';
import Contact from './components/Contact/Contact';
import ReservaMain from './components/ReservasMain/Reserva';
import UserList from './components/Users/Users';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/rooms/:sedeName" element={<Room />} />
        <Route path="/rooms/reservation-form" element={<ReservationForm />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/reserva" element={<ReservaMain/>}/>
        <Route path="/users" element={<UserList/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
