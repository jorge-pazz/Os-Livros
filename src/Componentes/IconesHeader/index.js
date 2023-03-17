import  './IconesHeader.module.css';
import Perfil from '../../imagens/perfil.svg';
import Sacola from '../../imagens/sacola.svg';

export default function IconesHeader(){

    const icones = [Perfil,Sacola];

    return(

        <ul className='icones'>

          {icones.map((icone)=>{
            return <li className='icone'><img src={icone} alt="1"></img></li>
          })}

        </ul>
    )


}