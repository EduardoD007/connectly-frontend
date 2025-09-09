

import { api } from '../../../api/api';
import { useAppDispatch } from '../../../hooks';
import { RootState } from '../../../store';
import { deleteUsertoFollow, getUser, saveUsertoFollow } from '../../../store/reducers/userReducer';
import { TypeBotaoSeguirProps } from '../../../Types/TypeBotaoSeguirProps';
import './BotaoSeguir.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BotaoSeguir = ({ username, id, userFollowed }: TypeBotaoSeguirProps) => {
  const dispatch = useAppDispatch()
  const selectedUser = useSelector((state: RootState) => state.user.selectedUser)

  const [buttonState, setButtonState] = useState('seguir');

  const checkFollowing = () => {
    if (selectedUser[0]?.following?.some((user) => user.username === username)) {
      setButtonState('seguindo')
      return
    }
    setButtonState('seguir')
  }

  const updateSelectUser = async (id: string, username: string) => {
    chanceButtoState()
    await dispatch(saveUsertoFollow({ id: id, username: username }))
    await api.saveAlert(userFollowed._id,
      {
        username: selectedUser[0].username,
        name: selectedUser[0].name,
        image: {png: selectedUser[0].image.png},
        followAlert: selectedUser[0].username,
        message: 'Começou a seguir você !'
      }
    )
    await dispatch(getUser(id))
  }

  const deleteUserFollowing = async (id: string, username: string) => {
    chanceButtoState()
    await dispatch(deleteUsertoFollow({ id: id, username: username }))
    await api.deleteAlert(userFollowed._id, selectedUser[0].username)
    await dispatch(getUser(id))
  }

  const chanceButtoState = () => {
    if (buttonState === 'seguir') {
      setButtonState('seguindo')
      return
    }
    if (buttonState === 'seguindo') {
      setButtonState('seguir')
      return
    }
  }

  useEffect(() => {
    checkFollowing()
  }, selectedUser)

  if (buttonState === 'seguir') {
    return (
      <div>
        <button className='botao-seguir' onClick={() => updateSelectUser(id, username)} >Seguir</button>
      </div>
    )
  }
  if (buttonState === 'seguindo') {
    return (
      <div>
        <button className='estado-seguindo' onClick={() => deleteUserFollowing(id, username)} >Seguindo</button>
      </div>
    )
  }
}

export default BotaoSeguir;