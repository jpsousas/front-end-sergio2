import React, { useState, useMemo, useEffect } from "react";
import Modal from "react-modal";
import "./ModalsStyles.css"

export function ModalDelete ({ isOpen, onRequestClose, onConfirm, funcionario }){
    useEffect(() => {
        console.log("O estado de isOpen mudou para: ", isOpen);
      }, [isOpen]);

    if (!funcionario) {
        return null; // Se o funcionario não estiver definido, não renderize nada
    }
    const deleteFuncionario = () => {
      fetch((`http://localhost:8000/api/funcionarios/delete/${funcionario.id}/`), {
        method: "DELETE",
      })
      .then((response) => {
        if(response.ok){
          console.log("Funcionario excluido com sucesso");

        }else{
          console.log("Erro ao deletar funcionario")
        }
        onRequestClose(false);
      })
      .catch((error) => {
        console.error("Erro na requisicao de exclusao: ",error)
        onRequestClose(false);
      })
    }
    return (
        <Modal 
            isOpen={isOpen} // Passa a prop 'isOpen' para o Modal
            onRequestClose={onRequestClose}
            ariaHideApp={false} // Especifica a acessibilidade
            style={{
                overlay: {
                  zIndex: 2000,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                },
                content: {
                  height: "20%",
                  maxWidth: '500px',
                  margin: 'auto',
                  borderRadius: '10px',
                  padding: '20px',
                },
              }}>
            <header className='modal_header' style={{display: 'flex', alignItems: 'center', marginBottom: '20px', height: "30%"}}>

                <h3>🗑️ Deseja mesmo deletar {funcionario.nome +", "+ funcionario.cargo}?</h3>

            </header>

            <body style={{textAlign: "center"}}>Ao fazer isso vai acontecer <b>DELETAR</b> essa entidade.</body>
            <footer style={{paddingLeft: "25%", marginTop: "5%"}}>
                <button className="close_button_delete" onClick={onRequestClose}>Close</button>
                <button className="save_button_delete" onClick={deleteFuncionario}>Confirmar</button>
            </footer>
        </Modal>
    );
}