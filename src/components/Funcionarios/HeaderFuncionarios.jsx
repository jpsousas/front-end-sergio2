import React, { useState } from 'react';
import { IoMdPersonAdd } from "react-icons/io";
import Modal from "react-modal";
import "./Funcionarios.css";

export default function HeaderFuncionarios() {
    const [visible, setVisible] = useState(false);
    const [nomeFuncionario, setNomeFuncionario] = useState("");
    const [cargoFuncionario, setCargoFuncionario] = useState("Game DEV Jr.");
    const salvarFuncionario = () => {
        const payload = {
            nome: nomeFuncionario,
            cargo: cargoFuncionario
        };

        fetch("http://localhost:8000/funcionarios/create/", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error("Erro ao criar funcionário: " + JSON.stringify(data));
                });
            }
            return response.json();
        })
        .then(data => {
            console.log("Funcionário criado com sucesso:", data);
            setVisible(false);
            setNomeFuncionario("");
            setCargoFuncionario("Game DEV Jr.");
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div id="nav-bar" className='header-gerenciamento' style={{backgroundColor: '#02416d', paddingLeft: '25px'}}>
            <IoMdPersonAdd  onClick={() => setVisible(!visible)} 
                style={{height: '32px', width: '32px', verticalAlign: '-5px', cursor: 'pointer',color:'#f8f8ec'}} />
            <div onClick={() => setVisible(!visible)} id='box-add-func' 
                style={{display: 'inline-block', paddingLeft: '25px', cursor: 'pointer'}}>
                <h1 style={{color:'#f8f8ec'}}>Adicionar Funcionário</h1>
            </div>
            <Modal 
                isOpen={visible} 
                onRequestClose={() => setVisible(!visible)} 
                style={{
                    overlay: {
                        zIndex: 2000,
                        backgroundColor: 'rgba(0,0,0,0.3)'
                    },
                    content: {
                        height: "50%",
                        maxWidth: '600px',
                        margin: 'auto',
                        borderRadius: '10px',
                        padding: '20px',
                    }
                }}
            >
                <header className='modal_header' style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                    <IoMdPersonAdd style={{height: '32px', width: '32px', verticalAlign: '-5px', marginRight: '20px'}}/>
                    <h1 style={{margin: 0}}>Cadastre um novo funcionário!</h1>
                </header>
                <div className='modal_body'>
                    <form className='formulario-body' onSubmit={(e)=>{e.preventDefault(); salvarFuncionario();}}>
                        
                        <h3>Insira o nome do funcionario:</h3>
                        <input 
                            type='text' 
                            placeholder= 'Ex: Ricardo Fajardo...'  
                            maxLength='100' 
                            minLength='4' 
                            style={{height: '25px', width: '200px'}}
                            value={nomeFuncionario}
                            onChange={(e) => setNomeFuncionario(e.target.value)}
                        />

                        <h3>Selecione o Cargo:</h3>
                        <select 
                            name='cargos' 
                            style={{height: '40px',width: '200px'}}
                            value={cargoFuncionario}
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
                <footer className='modal_footer' style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button className="close_button" onClick={() => setVisible(!visible)} 
                        style={{marginRight: '10px'}}
                    >
                        Fechar
                    </button>
                    <button className="save_button" onClick={salvarFuncionario}>
                        Salvar
                    </button>
                </footer>
            </Modal>
        </div>
    );
}