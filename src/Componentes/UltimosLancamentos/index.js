import Styles from './UltimosLancamentos.module.css';
import { livros } from './dadosUltimosLancamento.js';


export default function UltimosLancamentos(){
const color = '#000';
    return(
        <section className={Styles.sectioUltimos}>
            <h2 style="color: blue" >ULTIMOS LANCAMENTOS</h2>

         <div className={Styles.NovosLivrosContainer}>   
            { livros.map( (livro) => (
                <img src={livro.src}/>
            ) ) }
        </div>

        </section>
        
    )


}
