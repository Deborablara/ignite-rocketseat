import {Container} from '../Header/styles'
import {Content} from '../Header/styles'
import logo from '../../assets/logo.svg'



export function Header(){
  return(
    <Container>
      <Content>
        <img src={logo} alt="círculo verde com um cifrão dentro escrito dt money ao lado direito" />
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}