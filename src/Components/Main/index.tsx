import { useEffect } from 'react';
import {useSelector } from 'react-redux';
import UserMain from '../UserMain';
import './Main.css'
import UserCenter from '../UserCenter';
import { getAllUsers, getUser } from '../../store/reducers/userReducer';
import { useAppDispatch } from '../../hooks';
import { RootState } from '../../store';
import { Outlet } from 'react-router-dom';
import Alerts from '../Alerts';

const Main = () => {
  const allUsers = useSelector((state:RootState) => state.user.allUsers)
  const selectedUser  = useSelector((state:RootState) => state.user.selectedUser)
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(getAllUsers())
  },[])

  return (
    <div className='main-container'>
      <div className='perfil-container-perfil'>
        <UserMain
          users={allUsers?? []}
          selectUser={(id:string) => dispatch(getUser(id))}
        />
        <UserCenter
          name={selectedUser[0]?.name ?? "usuário"}
          image={selectedUser[0]?.image.png ?? "./images/avatars/image-user.png"}
        />
        <div className='alerts-cont'>
          <span className='alerts-titulo'>Notificações</span>
        </div>
        <Alerts/>
      </div>
      <div className='post-container-post'>
        <Outlet
        />
      </div>
    </div>
  )

}

export default Main;
