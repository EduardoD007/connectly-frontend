import { useEffect, useState } from 'react';
import TabsPerfil from '../../TabsPerfil';
import './Perfil.css'
import PostsPage from '../PostsPage';
import ModalPublicar from '../../Modais/ModalPublicar';
import FeedsPage from '../FeedsPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useAppDispatch } from '../../../hooks';
import { setActiveTab } from '../../../store/reducers/activeTabReducer';



const Perfil = () => {
  const activeTab = useSelector((state:RootState) => state.tab.activeTab)
  const [modalPublicarVisible, setModalPublicarVisible] = useState(false)
  const userSelected = useSelector((state: RootState) => state.user.selectedUser)
  const dispatch = useAppDispatch()


  const selectTabContent = () => {
    return activeTab === 'posts'? <PostsPage/> : <FeedsPage/>
  }

  useEffect(() => {
      selectTabContent()
  }, [activeTab])

  if(!userSelected[0]) {
    return <p>Loading...</p>
  }

  return(
    <div className='perfil-container-main'>
      <div className='img-usuario-border'></div>
      <img className='img-usuario' src={userSelected[0].image.png} alt='image-juliusomo.png'></img>
      <div className='img-fundo-perfil'></div>
      <div className='titulo'> {userSelected[0].name}</div>
      <div className='button-criar-container'>
         <button className='button-criar-publicacao' onClick={() => setModalPublicarVisible(true)}>Criar publicação</button>
      </div>
      <div>
        <TabsPerfil
          changeActiveTab = {(tab:string) => dispatch(setActiveTab(tab))}
          activeTab={activeTab}
        />
      </div>
      <div className='feeds-container'>
        <div className='feeds-inside-container'>
           {selectTabContent()}
        </div>
      </div>
        <div>
          {modalPublicarVisible && 
            <ModalPublicar
              modalState = {(visible) => setModalPublicarVisible(visible)}
            />}
        </div>
    </div>
  )
}

export default Perfil;