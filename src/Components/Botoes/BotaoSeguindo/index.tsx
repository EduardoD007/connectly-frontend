import { useRef } from 'react';
import TypeBotaoSeguindoProps from '../../../Types/TypeBotaoSeguindoProps';
import './BotaoSeguindo.css'

const BotaoSeguindo = ({ setModalFollow, setModalFollowers }:TypeBotaoSeguindoProps) => {
  const buttonRef = useRef<HTMLButtonElement  | null>(null)
  
    const mouseLeave = (e: React.MouseEvent) => {
      if(!buttonRef.current) return
  
      const buttonPosition = buttonRef.current.getBoundingClientRect()
  
      if(e.clientY < buttonPosition.top || e.clientY > buttonPosition.bottom) {
        setModalFollow(false)
      }
    }
  return (
    <div>
      <button 
        ref={buttonRef}
        className='botao-seguindo' 
        onMouseEnter ={() => (setModalFollow(true), setModalFollowers(false))} 
        onMouseLeave={mouseLeave}
        >Seguindo
      </button>
    </div>
  )
}

export default BotaoSeguindo;