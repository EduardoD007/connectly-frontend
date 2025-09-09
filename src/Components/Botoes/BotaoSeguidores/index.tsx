import { useRef } from 'react';
import TypeBotaoSeguidoresProps from '../../../Types/TypeBotaoSeguidoresProps';
import './BotaoSeguidores.css'

const BotaoSeguidores = ({ setModalFollowers, setModalFollow }:TypeBotaoSeguidoresProps) => {
  const buttonRef = useRef<HTMLButtonElement  | null>(null)

  const mouseLeave = (e: React.MouseEvent) => {
    if(!buttonRef.current) return

    const buttonPosition = buttonRef.current.getBoundingClientRect()

    if(e.clientY < buttonPosition.top || e.clientY > buttonPosition.bottom) {
      setModalFollowers(false)
    }
  }

  return (
    <div>
      <button 
        ref={buttonRef}
        className='botao-seguidores' 
        onMouseEnter ={() => (setModalFollowers(true), setModalFollow(false))} 
        onMouseLeave={mouseLeave}
      >
        Seguidores</button>
    </div>
  )
}

export default BotaoSeguidores;