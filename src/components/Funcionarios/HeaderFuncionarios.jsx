import React, {useState, useEffect, useMemo} from 'react';
import { IoMdPersonAdd } from "react-icons/io"; // icone de add pessoa
import Modal from "react-modal";
import "./Funcionarios.css";

export default function HeaderFuncionarios ({}){
    const [visible,setVisible] = useState(false);

    return (
        <div id="nav-bar" className='header-gerenciamento' style={{backgroundColor: '#02416d', paddingLeft: '25px'}}>
            <IoMdPersonAdd onClick={()=>setVisible(!visible)} style={{height: '32px', width: '32px', verticalAlign: '-5px'}}/>
            <div onClick={()=>setVisible(!visible)} id='box-add-func' style={{display: 'inline-block', paddingLeft: '25px'}}>
                <h1 color='#f8f8ec'>Adicionar Funcionário</h1>
            </div>
            <Modal isOpen={visible} onRequestClose={() => setVisible(!visible)} 
            style={{
                overlay: {
                    zIndex: 2000
                }
            }}>
                <header className='modal_header'>
                    <IoMdPersonAdd  style={{height: '32px', width: '32px', verticalAlign: '-5px', marginRight: '20px'}}/>
                    <h1>Cadastre um novo funcionário!</h1>
                </header>
                <body className='modal_body'>
                    <form className='formulario-body'>
                        
                        <h3>Insira o nome do funcionario:</h3>
                        <input type='text' placeholder='Ex: Ricardo Fajardo...' maxLength='100' minLength='20'></input>
                        <h3>Selecione o Cargo:</h3>
                        <select name='cargos'>
                            <option value='1'>Desenvolvedor WEB Jr.</option>
                            <option value='2'>Estagiário</option>
                            <option value='3'>QA</option>
                            <option value='4'>Designer</option>
                            <option value='5' selected>Game DEV Jr.</option>
                            <option value='6'>Gerente de Projetos</option>
                            <option value='7'>Analista de Dados</option>
                            <option value='8'>Engenheiro de Software</option>
                            <option value='9'>Especialista em Redes</option>
                            <option value='10'>Desenvolvedor Mobile</option>
                            <option value='11'>Analista de Suporte</option>
                        </select>
                        <input style={{display: 'none'}} type='text' placeholder='Digite o cargo'></input>
                        <h3>Qual a jornada de trabalho?</h3> 
                        <select style={{width: ''}}>
                            <option value='20'>20h</option>
                            <option value='25'>25h</option>
                            <option value='30'>30h</option>
                            <option value='40'>40h</option>
                            <option value='44'>44h</option>
                        </select>
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