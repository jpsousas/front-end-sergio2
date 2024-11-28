import React, {useState, useEffect, useMemo} from 'react';
import { IoMdPersonAdd } from "react-icons/io"; // icone de add pessoa
import Modal from "react-modal";

export function Header ({}){
    const [visible,setVisible] = useState(false);
    const close_button_style={
        backgroundColor: "red",
        height: "30px",
        width: "100px",
        marginRight: "75px"
    };
    const save_button_style={
        backgroundColor: "#e1ff4f",
        height: "30px",
        width: "100px",

    }
    return (
        <div id="nav-bar" className='header-gerenciamento' style={{backgroundColor: '#02416d',  paddingLeft: '25px'}}>
            <IoMdPersonAdd onClick={()=>setVisible(!visible)} style={{height: '32px', width: '32px', verticalAlign: '-5px'}}/>
            <div onClick={()=>setVisible(!visible)} id='box-add-func' style={{display: 'inline-block', paddingLeft: '25px'}}>
                <h1 color='#f8f8ec'>Adicionar Funcionário</h1>
            </div>
            <Modal isOpen={visible} onRequestClose={()=>setVisible(!visible)}>
                <header>
                <h1>Cadastre um novo funcionario!</h1>
                </header>
                <footer>
                    <button id='close-button' style={close_button_style} onClick={()=>setVisible(!visible)}>Close</button>
                    <button id='save-button' style={save_button_style}>Salvar</button>
                </footer>
                
            </Modal>
        </div>
    )

}