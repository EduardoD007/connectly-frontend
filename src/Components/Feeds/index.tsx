import './Feeds.css'
import { TypePostProps } from '../../Types/TypePostProps';
import BotaoComentar from '../Botoes/BotaoComentar';
import BotaoCurtir from '../Botoes/BotaoCurtir';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import BotaoExcluirFeed from '../Botoes/BotaoExcluirFeed';

const Feeds = ( { post }: TypePostProps) => {
  const users = useSelector((state:RootState) => state.user.allUsers)
  const selectedUser = useSelector((state: RootState) => state.user.selectedUser)
  let userName = ''

  for(const user of users) {
    if(user.username === post.username){
      userName = user.name
    }
  }

  return (
    Object.keys(post).length > 0 ?(
      <div className='feed-page-container'>
      <div className='user-info-feed'>
        <img className='img' src={post.image.png} alt={post.image.png}></img>
        <label className='user-name-feed'>{userName}</label>
        <div className='feed-botao-excluir'>
           <BotaoExcluirFeed 
         userId={selectedUser[0]._id}
         feedId={post._id ?? ""}
         username={selectedUser[0].username}
        />
        </div>
      </div>
      <div className='feed-text-container'>
        <div className='text'>
          {post.post.message.text}
        </div>
      </div>
      <div className='img-feed-user-container'>
        <img className='img-feed-user' src={post.post.message.image}></img>
      </div>
      <div className='line-feed'></div>
      <div className='actions-center'>
        <div className='actions-center-curtidas'>
          <BotaoCurtir/>
          <div>0 curtidas</div>
        </div>
        <div className='actions-center-comentarios'>
          <div>0 comentarios</div>
          <BotaoComentar/>
        </div>
      </div>
    </div>)
     : null
  )
}

export default Feeds;