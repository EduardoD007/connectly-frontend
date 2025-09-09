/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql } from '@apollo/client';
import { useAppDispatch } from '../../../hooks';
import { TypeBotaoExcluirFeedsProps } from '../../../Types/TypeBotaoExcluirFeedsProps';
import './BotaoExcluirFeed.css'
import { TiDeleteOutline } from "react-icons/ti";
import { useMutation, useQuery } from '@apollo/client/react';
import { getUser } from '../../../store/reducers/userReducer';
import { useEffect } from 'react';
import { GET_USER_FEEDS } from '../../pages/FeedsPage';

const DELETE_USER_FEED = gql`
  mutation DELETE_FEED( $userId: String!, $feedId: String!){
    deleteFeed(userId: $userId, feedId: $feedId) {
      _id
      name 
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

interface User {
  _id: string,
  name: string,
  feeds:[Feed]
}

type Feed = {
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

interface DeleteFeedData {
  deleteFeed: {
    user: [User]
  }
}

interface DeleteFeedVars {
  userId: string
  feedId: string
}

const BotaoExcluirFeed = ({ userId, feedId, username }: TypeBotaoExcluirFeedsProps) => {
  const [deleteFeed] = useMutation<DeleteFeedData,DeleteFeedVars>(DELETE_USER_FEED, {
    refetchQueries: [
      {
        query: GET_USER_FEEDS,
        variables: {username: username}
      }
    ]
  })


  return (
    <div >
      <button className='botao-excluir-feed' onClick={() => deleteFeed({variables: { userId, feedId }})}>
        <TiDeleteOutline size={22} />
      </button>
    </div>
  )
}

export default BotaoExcluirFeed;