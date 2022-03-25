import closeImg from '../../assets/close.svg'
import Modal from "react-modal";
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import { Container, RadioBox, TransactioTypeContainer } from "./styles";
import {FormEvent, useState} from 'react'
import { api } from '../../services/api';

interface NewTransactionProps{
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps){

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState(0);

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = ({
      title, 
      value, 
      category, 
      type
    })

    api.post('/transactions', data)
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar Transação</h2>

      <input type="text" placeholder="Descrição"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input type="number" placeholder="Valor"
      value={value}
      onChange={event => setValue(Number(event.target.value))}
      />

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

      <input type="text" placeholder="Categoria"
      value={category}
      onChange={event => setCategory(event.target.value)}
      />

      <button type="submit">Cadastrar</button>

      </Container>
      
  
    </Modal>
  )
}