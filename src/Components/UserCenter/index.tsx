import { useState } from 'react';
import { TypeUserCenterProps } from '../../Types/TypeUserCenterProps'
import BotaoSeguidores from '../Botoes/BotaoSeguidores';
import ModalSeguidores from '../Modais/ModalSeguidores';
import './UseCenter.css'
import { RiUserShared2Fill } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import ModalSeguindo from '../Modais/ModalSeguindo';
import BotaoSeguindo from '../Botoes/BotaoSeguindo';
import { useNavigate } from 'react-router-dom';

const UseCenter = ({ image, name }:TypeUserCenterProps) => {
  const [modalFollowers, setModalFollowers] = useState(false)
  const [modalFollow, setModalFollow] = useState(false)
  const navegate = useNavigate()

  return (
    <div className='center-container'>
      <div className='user-info'>
        <img src={image} alt={image}></img>
        <label className='user-name'>{name}</label>
      </div>
      <div className='user-itens'>
        <div className='user-follow'>
          <div className='seguidores'> 
            {modalFollowers && (
              <span>
                <ModalSeguidores
                  setModalFollowers = {(set:boolean) => setModalFollowers(set)}
                />
              </span>
            ) }
            {modalFollow && (
              <span>
                <ModalSeguindo
                  setModalFollow = {(set:boolean) => setModalFollow(set)}
                />
              </span>
            ) }
            <span><RiUserShared2Fill className='icon-follow'/></span>
            <span><BotaoSeguidores
              setModalFollowers = {(set:boolean) => setModalFollowers(set)}
              setModalFollow = {(set:boolean) => setModalFollow(set)}
            /></span>
          </div>
          <div className='seguidores'>
            <span><RiUserShared2Fill className='icon-following'/></span>
            <span>
              <BotaoSeguindo
                setModalFollow = {(set:boolean) => setModalFollow(set)}
                setModalFollowers = {(set:boolean) => setModalFollowers(set)}
              />
            </span>

          </div>
        </div>
        <div  className='user-post'>
          <button className='button' onClick={() => navegate('/perfil')}>
            Perfil
          </button>
          <button  className='button' onClick={() => navegate('/usuarios')}>
            <SlUserFollow size={19} style={{ verticalAlign: "bottom" }}/>
          </button>
        </div>
      </div>
    </div>
  )

}

export default UseCenter;