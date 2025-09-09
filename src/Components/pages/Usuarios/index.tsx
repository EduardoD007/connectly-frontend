
import { useSelector } from 'react-redux';
import './Usuarios.css'
import { RootState } from '../../../store';
import BotaoSeguir from '../../Botoes/BotaoSeguir';

const Usuarios = () => {
  const allUsers = useSelector((state: RootState) => state.user.allUsers)
  const selectedUser = useSelector((state: RootState) => state.user.selectedUser)


  return (
    <div className='usuarios-container'>
      <div className='titulo'>
        Encontre pessoas para adicionar à sua rede !
      </div>
      <div className='users'>
        {(allUsers ?? []).map((user) =>
          user._id !== selectedUser[0]._id ? (
            <div key={user._id} className='user'>
              <div className='user-info'>
                <div>
                  <img className='img' src={user.image.png} alt={user.image.png}></img>
                </div>
                <div>
                  {user.name}
                </div>
              </div>
              <div className='user-botao'>
                <BotaoSeguir
                  username={user.username}
                  id={selectedUser[0]?._id ?? ""}
                  userFollowed={user}
                />
              </div>
            </div>
          ) : null
        )}
         
      </div>
    </div>
  )
}

export default Usuarios;