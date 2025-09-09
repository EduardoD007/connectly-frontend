import { useSelector } from 'react-redux';
import './ModalSeguidores.css'
import { RootState } from '../../../store';
import TypeModalSeguidoresProps from '../../../Types/TypeModalSeguidores';
import { useRef } from 'react';

const ModalSeguidores = ( {setModalFollowers }: TypeModalSeguidoresProps) => {
  const selectedUser = useSelector((state:RootState) => state.user.selectedUser)
  const modalRef = useRef<HTMLDivElement  | null>(null)
  
    const mouseLeave = (e: React.MouseEvent) => {
      if(!modalRef.current) return
  
      const modalPosition = modalRef.current.getBoundingClientRect()
  
      if(e.clientY < modalPosition.top || e.clientY > modalPosition.bottom) {
        setModalFollowers(false)
      }

      if(e.clientX < modalPosition.left || e.clientX > modalPosition.right) {
        setModalFollowers(false)
      }
    }

  return (
    <div className='modal-seguidores'
      ref={modalRef}
      onMouseLeave={mouseLeave}
      >
      <div className='titulo-modal'>Seguidores</div>
      <div className='users'>
        {(selectedUser[0]?.followers?? []).map((follower) => {
          return (
            <div className='user'>
              <div>
                <img className='img' src={follower.image.png} alt={follower.image.png}></img>
              </div>
              <div>
                {follower.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ModalSeguidores;