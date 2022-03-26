import entradas from '../../assets/Entradas.svg'
import saidas from '../../assets/Saídas.svg'
import total from '../../assets/Total.svg'
import {useContext} from 'react'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";


export function Summary(){
  const {transactions} = useContext(TransactionsContext)

  console.log(transactions)

  return(
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={entradas} alt="flecha verde apontando para cima" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidas} alt="flecha vermelha apontando para baixo" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="bg-green">
        <header>
          <p>Total</p>
          <img src={total} alt="Símbolo cifrão" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}