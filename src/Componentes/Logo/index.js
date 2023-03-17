import Style from './Logo.module.css';
import logo from '../../imagens/logo.svg'

export default function Logo({ children }){

    return(

        <div className={Style.logo}>
            <img src={logo} alt='logo' 
             className={Style.logoImg}
            
            ></img>
            <p>{ children }</p>
        </div>


    )

}