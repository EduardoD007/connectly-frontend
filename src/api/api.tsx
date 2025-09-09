import TypeAlert from "../Types/TypeAlert";
import { TypePost } from "../Types/TypePost";

const url = 'http://localhost:3000/';

export const api = {

  async getUsers()  {
    try {
      const response = await fetch(`${url}api/users`)

      if(!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      return await response.json()

    } catch (error) {
      alert(`Erro ao buscar usuário: ${error}`)
    }
  },

  async getUser(id:string)  {
    try {
      const response = await fetch(`${url}api/users/${id}`)

      if(!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      return await response.json()

    } catch (error) {
      alert(`Erro ao buscar usuário: ${error}`)
    }
  },

  async saveFollowing(id: string, username: string) {
    try {
      const response = await fetch(`${url}dev/api/users/following/${id}/${username}`,
        {
          method:'POST',
          headers: {
            "Contet-Type":"application/json"
          }
        }
      )

      if(!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      return await response.json()

    } catch (error) {
      alert(`Erro ao buscar usuário: ${error}`)
    }
  },

  async deleteFollowing(id: string, username: string) {
    try {
      const response = await fetch(`${url}dev/api/users/deletefollowing/${id}/${username}`,
        {
          method: 'POST',
          headers: {
            "Contet-Type":"application/json"
          }
        }
      )

      if(!response.ok) {
        throw new Error(`Erro Http: ${response.status}`)
      }

       return await response.json()

    } catch (error) {
      alert(`Erro ao excluir pessoa seguida: ${error}`)
    }
  },

   async saveAlert(id: string, alertObject:TypeAlert) {
    try {
      const response = await fetch(`${url}dev/api/users/alert/${id}`,
        {
          method:'POST',
          headers: {
            "Contet-Type":"application/json"
          },
          body: JSON.stringify(alertObject)
        }
      )

      if(!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      return await response.json()

    } catch (error) {
      alert(`Erro ao salvar alerta: ${error}`)
    }
  },

  async deleteAlert(userid: string, username?:string, alertId?: string) {
    try {
      const response = await fetch(`${url}dev/api/users/deletealert/${userid}/${username}/${alertId}`,
        {
          method:'POST',
          headers: {
            "Contet-Type":"application/json"
          },
        }
      )

      if(!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      return await response.json()

    } catch (error) {
      alert(`Erro ao deletar alerto de seguidor: ${error}`)
    }
  },

  async saveMessage(post:TypePost) {
    try {
      const response = await fetch(`${url}dev/api/message`,
        {
          method:'POST',
          headers: {
            "Contet-Type":"application/json"
          },
          body: JSON.stringify(post)
        }
      )

      if(!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      return await response.json()

    } catch (error) {
      alert(`Erro ao salvar post: ${error}`)
    }
  },

  async getMessage(username:string) {
    try {
      const response = await fetch(`${url}api/message/${username}`);

      if(!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      return await response.json()

    } catch (error) {
      alert(`Erro ao buscar posts: ${error}`)
    }
    
  }
}

