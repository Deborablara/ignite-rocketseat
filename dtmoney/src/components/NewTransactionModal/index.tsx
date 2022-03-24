import closeImg from '../../assets/close.svg'
import Modal from "react-modal";
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import { Container, RadioBox, TransactioTypeContainer } from "./styles";
import {useState} from 'react'

interface NewTransactionProps{
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps){

  const [type, setType] = useState('deposit');

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="botão fechar" />
      </button>

      <Container>
      <h2>Cadastrar Transação</h2>

      <input type="text" placeholder="Descrição"/>

      <input type="number" placeholder="Valor"/>

      <TransactioTypeContainer>
        <RadioBox 
        type="button" 
        onClick={() => {setType('deposit')}}
        isActive={type === 'deposit'}
        activeColor="green">
          <img src={incomeImg} alt="Entrada - flecha verde apontando para cima" />
          <span>Entrada</span>
        </RadioBox>
        
        <RadioBox 
        type="button" 
        onClick={() => {setType('wichdraw')}}
        isActive={type === 'wichdraw'}
        activeColor="red">
          <img src={outcomeImg} alt="Saída - flecha vermelha apontando para baixo" />
          <span>Saída</span>
        </RadioBox>


      </TransactioTypeContainer>

      <input type="number" placeholder="Categoria"/>

      <button type="submit">Cadastrar</button>

      </Container>
      
  
    </Modal>
  )
}