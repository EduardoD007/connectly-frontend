import './BotaoCurtir.css'
import { BiLike } from "react-icons/bi";

const BotaoCurtir = () => {
  return(
  <div className='botao-curtir-container'>
    <button className='botao-curtir'><BiLike size={22}/></button>
  </div>
  )
}

export default BotaoCurtir;