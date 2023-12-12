export interface Reserva{
    _id: string;
    id_sala: number;
    fecha: Date,
    nombre: string;
    apellido: string;
    numcuenta: number;
    horas_reservadas: number;
    integrantes: string;
  }