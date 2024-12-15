import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

import es from 'date-fns/locale/es'; // Importa la localización para español

import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'es-ES': es, // Configuración para español
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const myEventsList = [
  {
    title: 'Reunión de equipo',
    start: new Date(2024, 11, 15, 10, 0),
    end: new Date(2024, 11, 15, 12, 0),
  },
  {
    title: 'Cliente reunion',
    start: new Date(2024, 11, 16, 13, 0),
    end: new Date(2024, 11, 16, 14, 0),
  },
];

const MyCalendar = () => (
  <div style={{ height: '500px' }}>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      defaultView="week"
       culture="es-ES"
    />
  </div>
);

export default MyCalendar;