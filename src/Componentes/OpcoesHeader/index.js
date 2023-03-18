
export default function OpcoesHeader(){

    const textoOpcoes = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE'];
    
    return(

        <ul className='opcoes'>
          {
            textoOpcoes.map((texto)=>{

              return <li className='opcao'><p>{texto}</p></li>

            })
          }
        </ul>
    )


}