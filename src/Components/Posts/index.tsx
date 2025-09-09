
import { useSelector } from 'react-redux';
import { TypePostProps } from '../../Types/TypePostProps';
import BotaoComentar from '../Botoes/BotaoComentar';
import BotaoCurtir from '../Botoes/BotaoCurtir';
import './Post.css'
import { RootState } from '../../store';

const Post = ( { post }: TypePostProps) => {
   const selectedUser = useSelector((state: RootState) => state.user.selectedUser)
  


  return (
    Object.keys(post).length > 0 ?(
      <div className='post-page-container'>
      <div className='user-info-post'>
        <img className='img' src={post.image.png} alt={post.image.png}></img>
        <label className='user-name-post'>{selectedUser[0].name}</label>
      </div>
      <div className='post-text-container'>
        <div className='text'>
          {post.post.message.text}
        </div>
      </div>
      <div className='img-post-user-container'>
        <img className='img-post-user' src={post.post.message.image}></img>
      </div>
      <div className='line-post'></div>
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

export default Post;