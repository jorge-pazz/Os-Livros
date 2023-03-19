import Input from 'Componentes/Input';
import Styles from './Pesquisa.module.css';

export default function Pesquisa(){


    return(
        <section className={Styles.section}>
            <h2>Já sabe por onde ccomeçar</h2>
            <h3>Encontre seu livro em nossa estante</h3>
            <Input />
        </section>
    )


}