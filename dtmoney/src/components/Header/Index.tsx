import {Container} from '../Header/styles'
import {Content} from '../Header/styles'
import logo from '../../assets/logo.svg'


interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){
  return(
    <Container>
      <Content>
        <img src={logo} alt="círculo verde com um cifrão dentro escrito dt money ao lado direito" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}