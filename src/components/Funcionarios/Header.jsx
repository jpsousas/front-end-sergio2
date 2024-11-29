import React, {useState, useEffect, useMemo} from 'react';
import { IoMdPersonAdd } from "react-icons/io"; // icone de add pessoa
import Modal from "react-modal";
import "./Funcionarios.css";

export function Header ({}){
    const [visible,setVisible] = useState(false);

    return (
        <div id="nav-bar" className='header-gerenciamento' style={{backgroundColor: '#02416d',  paddingLeft: '25px'}}>
            <IoMdPersonAdd onClick={()=>setVisible(!visible)} style={{height: '32px', width: '32px', verticalAlign: '-5px'}}/>
            <div onClick={()=>setVisible(!visible)} id='box-add-func' style={{display: 'inline-block', paddingLeft: '25px'}}>
                <h1 color='#f8f8ec'>Adicionar Funcionário</h1>
            </div>
            <Modal isOpen={visible} onRequestClose={() => setVisible(!visible)}>
                <header className='modal_header'>
                    <IoMdPersonAdd  style={{height: '32px', width: '32px', verticalAlign: '-5px', marginRight: '20px'}}/>
                    <h1>Cadastre um novo funcionário!</h1>
                </header>
                <body className='modal_body'>
                    <form className='formulario-body'>
                        
                        <h3>Insira o nome do funcionario:</h3>
                        <input type='text' placeholder='Ex: Ricardo Fajardo...'></input>
                        <h3>Selecione o Cargo:</h3>
                        <select name='cargos'>
                            <option value='1'>Desenvolvedor WEB Jr.</option>
                            <option value='2'>Estagiario</option>
                            <option value='3'>QA</option>
                            <option value='4'>Designer</option>
                            <option value='5' selected>Game DEV Jr.</option>
                            <option value='6'>Gerente de Projetos</option>
                            <option value=''>Outro...</option>
                        </select>
                        <input type='text' placeholder='Digite o cargo'></input>
                        <h3>Quais os dias laborais desse colaborador?</h3>
                        <input></input>
                        <h3>horario de chegada</h3>
                        <input></input>
                        <h3>horario de saida</h3>
                        <input></input>
                    </form>
                </body>
                <footer className='modal_footer'>
                    <button className="close_button" onClick={() => setVisible(!visible)}>Close</button>
                    <button className="save_button">Salvar</button>
                </footer>
            </Modal>
        </div>
    )

}