/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { StyledModal } from "./style";
import { MdClose } from 'react-icons/md'

const Modal = ({ children, setModal }) => {
    //Declara o useRef, nosso querido "querySelector" reativo

    const modalRef = useRef();
    //Efeito de outClick
    useEffect(() => {
        /* 
            Mouse do evento "mousedown", muito semelhante ao click, 
            mas mais adequado para eventos semelhantes de window, document e body
        */

        function handleOutClick(event){
            //Pego o event target (o elemento clicado)
            const target = event.target;
            //Verifico se esse elemento é a referência ou está contida na referência
            if(!modalRef.current?.contains(target)){
                //Seto o estado de modal para fechado (o ocasionando a desmontagem por conta da condição em App.js)
                setModal(false);
            }
        }
        //Adiciona evento a document
        document.addEventListener('mousedown', handleOutClick)

        //Desmontagem
        return () => {
            document.removeEventListener('mousedown', handleOutClick)
        }
    }, [])
    //Por conta da lista de dependências vazia o efeito acontece na montagem
 
    return(
        <StyledModal>

            { /* div recebe a ref declarada na linha (7) */ }
            <div className="modalBox" ref={modalRef}>
                { /* 
                    modal também fecha no evento de clique 
                */ }
                
                <button onClick={() => setModal(false)} className="closeButton">
                    <MdClose size={21}/>
                </button>
                Modal
                {children}
            </div>            
        </StyledModal>
    )
}
export default Modal;