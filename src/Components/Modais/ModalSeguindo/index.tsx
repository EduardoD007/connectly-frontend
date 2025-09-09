import { useSelector } from 'react-redux';
import './ModalSeguindo.css'
import { RootState } from '../../../store';
import TypeModalSeguindoProps from '../../../Types/TypeModalSeguindoProps';
import { useRef } from 'react';

const ModalSeguindo = ( {setModalFollow }: TypeModalSeguindoProps) => {
  const selectedUser = useSelector((state:RootState) => state.user.selectedUser)
    const modalRef = useRef<HTMLDivElement  | null>(null)
    
      const mouseLeave = (e: React.MouseEvent) => {
        if(!modalRef.current) return
    
        const modalPosition = modalRef.current.getBoundingClientRect()
    
        if(e.clientY < modalPosition.top || e.clientY > modalPosition.bottom) {
          setModalFollow(false)
        }
  
        if(e.clientX < modalPosition.left || e.clientX > modalPosition.right) {
          setModalFollow(false)
        }
      }

  return (
    <div className='modal-seguindo'
       ref={modalRef}
       onMouseLeave={mouseLeave}
    >
      <div className='titulo-modal'>Seguindo</div>
      <div className='users'>
        {(selectedUser[0]?.following?? []).map((follow) => {
          return (
            <div className='user'>
              <div>
                <img className='img' src={follow.image.png?? ""} alt={follow.image.png}></img>
              </div>
              <div>
                {follow.name?? ""}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ModalSeguindo;