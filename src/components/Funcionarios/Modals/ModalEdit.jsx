import React from "react";
import {Modal} from "react-modal";

export function ModalEdit (){
    const [visible, setVisible] = useState(false);
    
    return (
        <Modal 
            isOpen={visible} 
            onRequestClose={() => setVisible(!visible)}
            style={{
                overlay: {
                    zIndex: 2000,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                },
                content: {
                    maxWidth: '85%',
                    margin: 'auto',
                    borderRadius: '10px'
                }
            }}>
            <header>Deseja mesmo (adicionar aqui alguma coisa) ?</header>
            <body>Ao fazer isso vai acontecer (adicionar mais alguma coisa)</body>
            <footer>
                <button>Close</button>
                <button>Salvar</button>
            </footer>
        </Modal>
    );
}