
import { useEffect, useState } from 'react';
import { api } from '../../../api/api';
import { RootState } from '../../../store';
import Post from '../../Posts';
import './PostsPage.css'
import { useSelector } from 'react-redux';
import { TypePost } from '../../../Types/TypePost';
import { useAppDispatch } from '../../../hooks';
import { setRefreshPostState } from '../../../store/reducers/refreshPostReducer';


const PostsPage = () => {
  const [userPosts, setUserPosts] = useState([])
  const userSelected = useSelector((state: RootState) => state.user.selectedUser)
  const postState = useSelector((state:RootState) => state.refreshPost.refreshPost)
  const dispatch = useAppDispatch()
 

  const getUserPosts = async () => {
    const posts = await api.getMessage(userSelected[0].username)
    setUserPosts(posts)
    dispatch(setRefreshPostState(false))
  }

  useEffect(() => {
    getUserPosts()
  }, [postState])


  return (
    <div>
      {userPosts.slice().reverse().map((objPost: TypePost) => {
        return (
          <div className={userPosts.length > 0 ? 'postpage-container' : ''} key={objPost._id}>
            <Post
              post={objPost}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PostsPage;