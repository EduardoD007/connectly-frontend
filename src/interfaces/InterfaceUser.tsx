interface InterfaceUser {
  _id: string
  name: string
  username:string,
  image: {png: string, webp: string}
  following?: [{username: string, name: string, image: {png: string, webp: string}}] | null
  followers?: [{username: string, name: string, image: {png: string, webp: string}}] | null
  alert?:[{
       _id: string,
       username: string,
       name: string,
       image: {png: string, webp: string}
       followAlert: string
       message: string
    }]
}

export default InterfaceUser;