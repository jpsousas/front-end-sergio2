import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export function TableHorarios () {
    const eventos = [
        { title: 'Evento 1', start: '2024-12-04', end: '2024-12-05' },
        { title: 'Evento 2', start: '2024-12-06', allDay: true },
    ];

    return (
        <div>
            <h2>Gerenciamento de Horários</h2>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="dayGridMonth"
                events={eventos}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
            />
        </div>
    );
};

export default TableHorarios;
