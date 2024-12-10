import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // Necessário para suportar cliques
import Modal from 'react-modal';

export function TableHorarios() {
    const [eventos, setEventos] = useState([
        { title: 'Evento 1', start: '2024-12-04', end: '2024-12-05' },
        { title: 'Evento 2', start: '2024-12-06', allDay: true },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateClick = (info) => {
        setSelectedDate(info.dateStr);
        console.log(info.dateStr);
        setIsModalOpen(true);
        console.log(isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [funcionarios, setFuncionarios] = useState([]); // Estado para armazenar os funcionários

    // Função para buscar os funcionários
    const getFuncionarios = () => {
        fetch("http://localhost:8000/api/funcionarios/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Dados recebidos:", data);
                setFuncionarios(data); // Armazena os dados no estado
            })
            .catch((error) => {
                console.error("Erro na requisição:", error);
            });
    };

    // Chamar a função de busca ao montar o componente
    useEffect(() => {
        getFuncionarios();
    }, []);

    return (
        <div>
            <h2>Gerenciamento de Horários</h2>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={!isModalOpen}
                contentLabel="Adicionar Evento"
                ariaHideApp={false}
                style={{
                    overlay: {
                      zIndex: 2000,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                    },
                    content: {
                      height: "40%",
                      maxWidth: '500px',
                      margin: 'auto',
                      borderRadius: '10px',
                      padding: '20px',
                    },
                  }}>
                <h3>Adicionar Horário</h3>
                <p>Data Selecionada: {selectedDate}</p>
                <select id="funcionarios-select" name="funcionario" style={{height: '40px',width: '200px'}}>
                <option value="">--Selecione--</option>
                {funcionarios.map((funcionario) => (
                    <option key={funcionario.id} value={funcionario.id}>
                        {funcionario.nome} {/* Assuma que 'nome' é um campo retornado */}
                    </option>
                ))}
            </select>
            <p>Hora início</p>
            <select id="Horário início" style={{height: '40px',width: '200px'}}>
                <option>08:00</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
            </select>
            <p>Hora fim</p>
            <select id="Horário início" style={{height: '40px',width: '200px'}}>
                <option>08:00</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
            </select>
                <footer>
                    <button className="save_button" onClick={closeModal}>Save</button>
                    <button className="close_button" onClick={closeModal}>Close</button>
                </footer>
            </Modal>




            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // interactionPlugin é necessário
                initialView="dayGridMonth"
                themeSystem="standard"
                events={eventos}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                dateClick={handleDateClick} // Este é o evento correto
            />

        </div>
    );
}
