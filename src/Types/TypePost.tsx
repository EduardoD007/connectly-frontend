export type TypePost = {
  _id?: string,
  username: string,
  image: { png: string, webp: string },
  post:
  {
    message: {
      text: string,
      image: string,
    },
    comments?: [
      {
        id: number,
        content: string,
        createAt: string,
        score: number,
        image: { png: string, webp: string },
        username: string
      }
    ] | []
    replies?: [
      {
        id: number,
        content: string,
        createAt: string,
        score: number,
        replyingTo: string
        user: {
          image: { png: string, webp: string },
        }
        username: string
      }
    ] | []
    likes?: number
  }
}