import React, { useEffect, useState } from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import Header from '../Header/Header';
import './ReservationForm.css';
import { Button } from '@mui/material';
import { apiConnection } from '../../api/apiConnection';
import { Sala } from './../../interfaces/Sala';
import { Reserva } from './../../interfaces/Reserva';
import { useParams } from 'react-router-dom';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


interface MyFormValues {
  firstName: string;
}

export const ReservationForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '' }
  /*const Reserva = () => {
    const { salaId } = useParams();
    const [reserva, setReserva] = useState<Sala>();
  
    useEffect(() => {
      const getSalaById = async () => {
        try {
          if (!salaId && salaId === '') return;
          const response = await apiConnection.get<Sala>(
            `/campus/get-sala-by-id/${salaId}`
          );
          if (!response.data && response.data === null) return;
          setReserva(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getSalaById();
    }, [salaId]);*/
  
  return (
    <>
      <Header />
      <div className="form-container">
        <div className="form-group">
          <h1>Llene el formulario para crear su reserva</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            <Form className="fields-container">

            <label htmlFor="firstName">Fecha y Hora</label>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
             <DemoContainer components={['DateTimePicker']}>
             <DateTimePicker label="Seleccione fecha y hora" />
             </DemoContainer>
              </LocalizationProvider>
              <br />


              <label htmlFor="firstName">Primer Nombre</label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="Primer Nombre"
                className="fields-form"
              />

              <label htmlFor="firstLastName">Primer Apellido</label>
              <Field
                id="firstLastName"
                name="firstLastName"
                placeholder="Primer Apellido"
                className="fields-form"
              />

              <label htmlFor="studentCode">No. Cuenta</label>
              <Field
                id="studentCode"
                name="studentCode"
                placeholder="No. cuenta"
                className="fields-form"
              />

              <label htmlFor="hours">Seleccione tiempo</label>
              <Field id="hours" as="select" name="hours" className="select-form">
                <option value={1}>1 hora</option>
                <option value={2}>2 horas</option>
                <option value={2}>3 horas</option>
              </Field>

              <label htmlFor="membersTeam">Integrantes | No. Cuenta </label>
              <Field id="membersTeam" name="membersTeam" as="textarea" className="textarea-form" />
              <Button variant="outlined" className="button-form">
                Enviar
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
