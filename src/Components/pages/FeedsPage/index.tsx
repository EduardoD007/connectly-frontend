import { gql } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useQuery } from '@apollo/client/react';
import Feeds from '../../Feeds';
import './FeedsPage.css'
/* eslint-disable react-refresh/only-export-components */

export const GET_USER_FEEDS = gql`
    query GET_USER($username: String!){
      getUser(username: $username){
         feeds{
            _id
            username
            post {
                message {
                    text
                    image
                }
            }
            image {
                png
                webp
            }
        }
      }
    }
  `
interface Feed {
  _id: string;
  username: string;
  post: {
    message: {
      text: string;
      image: string;
    };
  };
  image: {
    png: string;
    webp: string;
  };
}

interface GetUserData {
  getUser: {
    feeds: Feed[];
  };
}

interface GetUserVars {
  username: string;
}

const FeedsPage = () => {
  const userSelected = useSelector((state: RootState) => state.user.selectedUser)

  
  const { data } = useQuery<GetUserData, GetUserVars>(GET_USER_FEEDS, {
    skip: !userSelected[0].username,
    variables: { username: userSelected[0].username },
    fetchPolicy: "network-only"
  })


  if(!userSelected[0].username) {
    return <p>Carregando usuário</p>
  }

  return (
    data?.getUser?.feeds && data?.getUser?.feeds.length > 0 ? (
      <div>
        {data?.getUser?.feeds.slice().reverse().map((feed: Feed) => {
          return (
            <div className={data?.getUser?.feeds.length > 0 ? 'feedspage-container' : ''} key={feed._id}>
              <Feeds
                post={feed}
              />
            </div>
          )
        })}
      </div>
    ) : null
  )
}

export default FeedsPage;