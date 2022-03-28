import entradas from '../../assets/Entradas.svg'
import saidas from '../../assets/Saídas.svg'
import total from '../../assets/Total.svg'
import { Container } from "./styles";

import { useTransactions } from '../../hooks/useTransactions';





export function Summary(){
  const {transactions} = useTransactions();

 
  const summary = transactions.reduce((acc, transaction) => {

    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    }else{
      acc.wichdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc

  }, {
    deposits: 0, 
    wichdraws: 0, 
    total: 0
  })

  return(
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={entradas} alt="flecha verde apontando para cima" />
        </header>
        <strong>
          {new Intl.NumberFormat(
            'pt-BR', {
            style: 'currency',
            currency: 'BRL'

            }).format(summary.deposits)
          }</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidas} alt="flecha vermelha apontando para baixo" />
        </header>
        <strong>- 
          {new Intl.NumberFormat(
            'pt-BR', {
            style: 'currency',
            currency: 'BRL'

            }).format(summary.wichdraws)
          }</strong>
      </div>
      <div className="bg-green">
        <header>
          <p>Total</p>
          <img src={total} alt="Símbolo cifrão" />
        </header>
        <strong>
          {new Intl.NumberFormat(
            'pt-BR', {
            style: 'currency',
            currency: 'BRL'

            }).format(summary.total)
          }</strong>
      </div>
    </Container>
  )
}