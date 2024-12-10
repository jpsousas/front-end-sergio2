import React, { useState, useMemo, useEffect } from "react";
import Modal from "react-modal";

export function ModalEdit ({ isOpen, onRequestClose, onConfirm, funcionario }){
    const [nomeFuncionario, setNomeFuncionario] = useState(funcionario?.nome || "");
    const [cargoFuncionario, setCargoFuncionario] = useState(funcionario?.cargo || "");
    const [visibilidade, setVisibilidade] = useState(isOpen)
    
    if(!funcionario){
        return null;
    }


    const SalvarEdicaoFuncionario= () => {
        const payload = {
            nome: nomeFuncionario,
            cargo: cargoFuncionario
        };
        fetch((`http://localhost:8000/api/funcionarios/update/${funcionario.id}/`),{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error("Erro ao atualizar funcionario"+ JSON.stringify(data));
                });
            }
            return response.json();
        })
        .then(data => {
            console.log("Funcionario atualizado com sucesso: ", data);
            onRequestClose(false)
        })
        .catch(error => {
            console.error(error);
        });
    }

    
    return (
        <Modal 
            isOpen={isOpen} // Passa a prop 'isOpen' para o Modal
            onRequestClose={onRequestClose}
            ariaHideApp={false} // Especifica a acessibilidade
            contentLabel="Confirmar Exclusão"
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
            <header className='modal_header' style={{display: 'flex', alignItems: 'center', marginBottom: '20px', height: "10%"}}>

                <h3>✏️ Editar: {funcionario.nome +", "+ funcionario.cargo}?</h3>

            </header>

            <div style={{textAlign: "center"}}>
                <form className='formulario-body' onSubmit={(e)=>{e.preventDefault(); SalvarEdicaoFuncionario();}}>
                        
                    <h3>Atualize o nome de {funcionario.nome}:</h3>
                    <input 
                        type='text'
                        placeholder={funcionario.nome}
                        maxLength='100' 
                        minLength='4' 
                        style={{height: '25px', width: '200px'}}
                        onChange={(e) => setNomeFuncionario(e.target.value)}
                    />

                    <h3>Atualize o cargo de {funcionario.nome}, atualmente: {funcionario.cargo}</h3>
                    <select 
                        name='cargos' 
                        style={{height: '40px',width: '200px'}}
                        onChange={(e) => setCargoFuncionario(e.target.value)}
                    >
                        <option value='Desenvolvedor WEB Jr.'>Desenvolvedor WEB Jr.</option>
                        <option value='Estagiário'>Estagiário</option>
                        <option value='QA'>QA</option>
                        <option value='Designer'>Designer</option>
                        <option value='Game DEV Jr.'>Game DEV Jr.</option>
                        <option value='Gerente de Projetos'>Gerente de Projetos</option>
                        <option value='Analista de Dados'>Analista de Dados</option>
                        <option value='Engenheiro de Software'>Engenheiro de Software</option>
                        <option value='Especialista em Redes'>Especialista em Redes</option>
                        <option value='Desenvolvedor Mobile'>Desenvolvedor Mobile</option>
                        <option value='Analista de Suporte'>Analista de Suporte</option>
                    </select>
                </form>

            </div>
            <footer style={{paddingLeft: "40%",marginTop: "10%"}}>
                <button className="close_button" onClick={onRequestClose}>Close</button>
                <button className="save_button" onClick={SalvarEdicaoFuncionario}>Confirmar</button>
            </footer>
        </Modal>
    );
}