import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // Necessário para suportar cliques
import Modal from 'react-modal';
import "./Horarios.css"
// import "../Funcionarios/Modals/ModalsStyles.css"

export function TableHorarios() {
    const [eventos, setEventos] = useState([
        { title: 'Henrique Araújo', start: '2024-12-04', end: '2024-12-05', duration: "02:00"   },
        { title: 'Mariana Oliveira', start: '2024-12-06', allDay: true },
        { title: 'Carlos Souza 08:00 - 17:00', start: '2024-12-12', duration: "02:00"}
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isExcludeModalOpen, setExcludeIsModalOpen] = useState(false);
    const [isEditModalOpen, setEditIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null); // Evento selecionado
    const [idFuncionario, setIdFuncionario] = useState(null);
    const [diaDaSemana, setDiaDaSemana] = useState(null);
    const [horarioInicio, setHorarioInicio] = useState(null);
    const [horarioFim, setHorarioFim] = useState(null);

    const handleEventClick = (info) => {
        setSelectedEvent(info.event); // Salva o evento selecionado
        console.log(selectedEvent)
        setSelectedDate(info.dateStr);
        console.log(info.dateStr)
        setEditIsModalOpen(true); // Abre o modal
    };
    function obterDiaDaSemana(data) {
        data = new Date(data)
        const diasDaSemana = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado','Domingo'];
        const dia = data.getDay();
        return diasDaSemana[dia];
    };
    const handleDateClick = (info) => {
        console.log(info)
        setSelectedDate(info.dateStr);
        setIsModalOpen(true);
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

    const closeModal = () => {
        setIsModalOpen(false)
    }
    
    const salvarHorario = () => {
        const payload_Horario = {
            dia_sem: obterDiaDaSemana(selectedDate),
            hora_inicio: horarioInicio,
            hora_fim: horarioFim
        };
        fetch("http://localhost:8000/api/horarios/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload_Horario)
        })
        .then(response => {
            if (!response.ok){
                return response.json().then(data => {
                    throw new Error("Erro ao criar horario: "+ JSON.stringify(data));
                });
            }
            return response.json();
        })
        .then(data => {
            console.log("Horario criado com sucesso: ", data);
            closeModal();
            setIdFuncionario();
            setHorarioInicio();
            setHorarioFim();
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <header style={{marginLeft: "20px",display: "flex"}}>
                <h2 onClick={() => setIsModalOpen(true)} style={{cursor: "pointer"}}>⏲️ Gerenciamento de Horários</h2>
    
                <h2 style={{paddingLeft: "57%", cursor: "pointer"}}>👤➕ Alocar um funcionario</h2>
            </header>
            

            {/* INICIO MODAL DE ADICIONAR HORARIO*/}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(!isModalOpen)}
                contentLabel="Adicionar Evento"
                ariaHideApp={false}
                style={{
                    overlay: {
                      zIndex: 2000,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                    },
                    content: {
                      height: "45%",
                      maxWidth: '500px',
                      margin: 'auto',
                      borderRadius: '10px',
                      padding: '10px',
                    },
                }}>
                    <div style={{display: "flex",height: "15%", backgroundColor: "#02416d",}}>
                        
                        <h3 style={{color: "white"}}>⏲️ Adicionar Horário</h3>   

                        <h3 style={{color: "white",paddingLeft: "10%"}}>Data Selecionada: {selectedDate}</h3>
                        <br/>
                    </div>
                    <div style={{ marginTop: "10px"}}>
                        <h3 style={{paddingLeft: "39%"}} color='white'>{obterDiaDaSemana(selectedDate)}</h3>
                    </div>
                    <form  onSubmit={(e)=>{e.preventDefault(); salvarHorario();}}>
                        
                        <h4>Hora início:</h4>
                        <select 
                        id="Horário início" 
                        style={{height: '40px',width: '200px'}}
                        value={"08:00"}
                        onChange={(e) => setHorarioInicio(e.target.value)}
                        >
                            <option value="08:00" selected>08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                        </select>
                        <h4>Hora fim:</h4>
                        <select 
                        id="Horário início" 
                        style={{height: '40px',width: '200px'}}
                        value={"16:00"}
                        onChange={(e) => setHorarioFim(e.target.value)}
                        >
                            <option value="08:00">08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00" >16:00</option>
                        </select>
                        <footer className='footer_add_modal'>
                            <button type='submit' className="horarios_save_button">Save</button>
                            <button className="horarios_close_button" onClick={closeModal}>Close</button>
                        </footer>
                    </form>
                    
            </Modal>
                {/*FIM MODAL DE ADICIONAR HORARIO*/}
                {/*INICIO MODAL EDIT DE HORARIO*/}
            <Modal
                isOpen={isEditModalOpen}
                onRequestClose={() => setEditIsModalOpen(!isEditModalOpen)}
                contentLabel="Editar Horario"
                ariaHideApp={false}
                style={{
                    overlay: {
                      zIndex: 2000,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                    },
                    content: {
                      height: "62%",
                      maxWidth: '500px',
                      margin: 'auto',
                      borderRadius: '10px',
                      padding: '20px',
                    },
                  }}>

                    <header className='modal_Header' style={{display: 'flex', alignItems: 'center', marginBottom: '20px', height: "15%", backgroundColor: "#02416d"}}> <h3>✏️ Editar evento </h3> 
                        <button style={{cursor: "pointer", marginLeft: "300px"}} onClick={setExcludeIsModalOpen}>🗑️</button>
                    </header>
                    <div style={{textAlign: "center", backgroundColor: "white"}}>
                        <h3>Editar Horário</h3>
                            <p>Data Selecionada: {selectedDate}</p>
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
                    </div>
                    <footer style={{paddingLeft: "40%", marginTop: "5%"}}>
                        <button className="save_button" onClick={closeModal}>Save</button>
                        <button className="close_button" onClick={() => setEditIsModalOpen(!isEditModalOpen)}>Close</button>
                    </footer>
                    <p style={{marginTop: "20px", color: "red"}}>**Ao editar, o horario editado se replicara para todos os outros funcionarios que anteriomente possuiam o mesmo horario</p>
            
            </Modal>
                {/*FIM MODAL DE EDIT*/}

                {/*INICIO MODAL DE EXCLUIR*/}
            <Modal
                isOpen={isExcludeModalOpen}
                onRequestClose={() => setExcludeIsModalOpen(!isExcludeModalOpen)}
                contentLabel="Editar Evento"
                ariaHideApp={false}
                style={{
                    overlay: {
                      zIndex: 2000,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                    },
                    content: {
                      height: "30%",
                      maxWidth: '500px',
                      margin: 'auto',
                      borderRadius: '10px',
                      padding: '20px',
                    },
                  }}> 
                  
                    <header className='modal_Header' style={{backgroundColor: "#02416d",display: 'flex', alignItems: 'center', marginBottom: '20px', height: "30%"}}>
                        <h3>Deseja mesmo excluir este registro?</h3>
                    </header>

                    <div style={{textAlign: "center", backgroundColor: "white", marginTop: "10%"}}>
                        <h4 style={{color: "red"}}>**Ao excluir este horário, todos os funcionario a ele ligados, ficarao sem horarios</h4>
                    </div>

                    <footer style={{paddingLeft: "25%", marginTop: "10%"}}>
                        <button style={{marginRight: "20px"}} className="save_button_delete" onClick={closeModal}>Excluir</button>
                        <button className="close_button_delete" onClick={() => setExcludeIsModalOpen(!isExcludeModalOpen)}>Cancelar</button>
                    </footer>
            </Modal>
                {/*FIM MODAL DE EXCLUIR*/}
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
