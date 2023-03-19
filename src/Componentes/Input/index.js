import { useState } from 'react';
import Styles from './Input.module.css';
import { livros } from './DadosPesquisa.js';

export default function Input(){

    const[livrosDigitados, setlivrosPequisados] = useState([]);

    

    return(

        <>
        <input 
            type="text" 
            placeholder='Escreva sua proxima leitura' 
            className={Styles.input} 
            onChange={ evento => {
                const textoDigitado =  evento.target.value;
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
                setlivrosPequisados(resultadoPesquisa)


            } }
            />
            <>

                
               
                
               { livrosDigitados.map((livro) =>(

                    <div className={Styles.Resuldados}>
                    <p>{livro.nome}</p>
                    <img src={livro.src} />
                    </div>

                ))}

                </>
        </>
             
    )

}