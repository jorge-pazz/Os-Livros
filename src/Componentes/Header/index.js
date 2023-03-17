import Logo from '../../Componentes/Logo';
import './Header.module.css';
import OpcoesHeader from '../../Componentes/OpcoesHeader';
import IconesHeader from '../../Componentes/IconesHeader';


export default function Header(){

    return(

        <header className='App-header'>

        <Logo>
          Os<strong>Livros</strong>
        </Logo>

        <OpcoesHeader />

        <IconesHeader />

      </header>

    )

}