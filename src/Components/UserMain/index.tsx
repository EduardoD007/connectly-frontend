import { useNavigate } from 'react-router-dom';
import type { TypeUserMainProps } from '../../Types/TypeUserMainProps';
import './UserMain.css';
import { useAppDispatch } from '../../hooks';
import { setActiveTab } from '../../store/reducers/activeTabReducer';

const UserMain = ({ users, selectUser}: TypeUserMainProps) => {
  const dispatch = useAppDispatch()
  const navegate = useNavigate()

  const returnUserName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    selectUser(event.target.value)
    navegate('/perfil')
    dispatch(setActiveTab("feed"))
  }

  return (
    <div className='simulador-container'>
      <div className='label'>
          Simulador de Usuários
      </div>
      <div className='select-container'>
        <select value='1' onChange={returnUserName}>
          <option value="1" disabled selected > 
            ... Escolha um usuário
          </option>
          {users.map((user) => {
            return (
              <option key={user._id} value={user._id}>{user.username}</option>
            )
          })}
        </select>
      </div>
      <div className='linha-separação'></div>
    </div>
  )
}

export default UserMain;
