import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // Necessário para suportar cliques
import Modal from 'react-modal';
import "../Funcionarios/Modals/ModalsStyles.css"

export function TableHorarios() {
    const [eventos, setEventos] = useState([
        { title: 'Henrique Araújo', start: '2024-12-04', end: '2024-12-05' },
        { title: 'Mariana Oliveira', start: '2024-12-06', allDay: true },
        { title: 'Carlos Souza', start: '2024-12-12', allDay: true}
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isExcludeModalOpen, setExcludeIsModalOpen] = useState(false);
    const [isEditModalOpen, setEditIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null); // Evento selecionado

    const handleEventClick = (info) => {
        setSelectedEvent(info.event); // Salva o evento selecionado
        setEditIsModalOpen(true); // Abre o modal
    };

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

            <Modal
                isOpen={isEditModalOpen}
                onRequestClose={!isEditModalOpen}
                contentLabel="Editar Evento"
                ariaHideApp={false}
                style={{
                    overlay: {
                      zIndex: 2000,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                    },
                    content: {
                      height: "80%",
                      maxWidth: '500px',
                      margin: 'auto',
                      borderRadius: '10px',
                      padding: '20px',
                    },
                  }}>

                    <header className='modal_Header' style={{display: 'flex', alignItems: 'center', marginBottom: '20px', height: "30%", backgroundColor: "#02416d"}}> <h3> Editar evento </h3> 
                    <button style={{cursor: "pointer", marginLeft: "340px"}} onClick={setExcludeIsModalOpen}>🗑️</button>
                    </header>
                    <body style={{textAlign: "center", backgroundColor: "white"}}>
                    <h3> Editar Horário</h3>
                <p>Data Selecionada: {selectedDate}</p>
                <select id="funcionarios-select" name="funcionario" style={{height: '40px',width: '200px'}}>
                <option value="">--Selecione--</option>
                {funcionarios.map((funcionario) => (
                    <option key={funcionario.id} value={funcionario.id}>
                        {funcionario.nome} {/* Assuma que 'nome' é um campo retornado */}
                    </option>
                ))}
            </select>
            <p>Editar Hora início</p>
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
            <p>Editar Hora fim</p>
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
            </body>
                <footer style={{paddingLeft: "40%", marginTop: "5%"}}>
                    <button className="save_button" onClick={closeModal}>Save</button>
                    <button className="close_button" onClick={closeModal}>Close</button>
                </footer>

            </Modal>

            <Modal
                isOpen={isExcludeModalOpen}
                onRequestClose={!isExcludeModalOpen}
                contentLabel="Editar Evento"
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
                  
                  <header className='modal_Header' style={{display: 'flex', alignItems: 'center', marginBottom: '20px', height: "30%"}}>
                  <h3>Deseja mesmo excluir este registro?</h3>
                  </header>

                  <body style={{textAlign: "center", backgroundColor: "white"}}>
                  Ao excluir este horário, irá excluir de todos os outros dias
                  </body>

                  <footer style={{paddingLeft: "25%", marginTop: "5%"}}>
                  <button style={{marginRight: "20px"}} className="save_button_delete" onClick={closeModal}>Excluir</button>
                  <button className="close_button_delete" onClick={closeModal}>Cancelar</button>
                  </footer>
                  </Modal>



                {console.log(eventos)};
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
                eventClick={handleEventClick}
            />

        </div>
    );
}
