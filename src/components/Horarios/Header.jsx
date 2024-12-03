import React, {useState, useEffect, useMemo} from 'react';
import { IoMdPersonAdd } from "react-icons/io"; // icone de add pessoa
import {TbClockPlus} from "react-icons/tb";
import Modal from "react-modal";
import "./Horarios.css";
// <IoMdPersonAdd onClick={()=>setVisible(!visible)} style={{height: '32px', width: '32px', verticalAlign: '-5px'}}/>
export function horariosHeader({}){
    const [visible,setVisible] = useState(false);

    return (
        <div id="nav-bar" className='header-gerenciamento' style={{backgroundColor: '#02416d',  paddingLeft: '25px'}}>
            <TbClockPlus onClick={()=>setVisible(!visible)}/>
            <div onClick={()=>setVisible(!visible)} id='box-add-func' style={{display: 'inline-block', paddingLeft: '25px'}}>
                <h1 color='#f8f8ec'>Adicionar Horario</h1>
            </div>
            <Modal>
                
            </Modal>
        </div>
    )
}
