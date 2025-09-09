import { useState } from "react";
import { api } from "../../../api/api";
import { TypePost } from "../../../Types/TypePost";
import styles from "./ModalPublicar.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { TypeModalPublicarProps } from "../../../Types/TypeModalPublicarProps";
import { useAppDispatch } from "../../../hooks";
import { setRefreshPostState } from "../../../store/reducers/refreshPostReducer";


const ModalPublicar = ( { modalState }: TypeModalPublicarProps) => {
  const [filePath, setFilePath] = useState<string | null>(null)
  const [postText, setPostText] = useState<string | null>(null)
  const selectedUser = useSelector((state: RootState) => state.user.selectedUser)
  const users = useSelector((state:RootState) => state.user.allUsers)
  const dispatch = useAppDispatch()
  let followerId = ''

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const fileName = file.name;
      setFilePath(`/posts/${fileName}`)
    }
  };

  const savePost = async () => {
    const newPost: TypePost = {
      username: selectedUser[0].username,
      image: selectedUser[0].image,
      post: {
          message: {
            text: postText ?? "",
            image: filePath ?? ""
          }
        }
    }
    await api.saveMessage(newPost)
    dispatch(setRefreshPostState(true))
    checkFollowers()
  }

  const checkFollowers = async () => {
    selectedUser[0]?.followers?.map(async (follower) => {
      for(const user of users) {
        if(user.username === follower.username) {
          followerId = user._id
        }
      }
      await api.saveAlert(followerId,
        {
          username: selectedUser[0].username,
          name: selectedUser[0].name,
          image: {png: selectedUser[0].image.png},
          followAlert: selectedUser[0].username,
          message: 'Tem uma nova publicação !'
        }
      )
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.titulo}> Crie seu post !</div>
      <div>
        <textarea className={styles["text-area"]} onChange={(event) => setPostText(event?.target.value)}></textarea>
      </div>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          style={{ display: "none" }}
          id="upload-image"
        />
        <label htmlFor="upload-image">
          <button
            className={styles["button-image"]}
            onClick={() => document.getElementById('upload-image')?.click()}
          >
            Inserir imagem
          </button>
        </label>
      </div>
      {filePath && (
        <div >
          <img className={styles["image-file"]} src={filePath ?? undefined} alt="Preview" />
        </div>
      )}
      <div className={styles.line}> </div>
      <div className={styles["botao-publicar-container"]}>
        <button className={styles["botao-publicar"]} onClick={() => {savePost(); modalState(false)}} >Publicar</button>
        <button className={styles["botao-publicar"]} onClick={() => modalState(false)} >Cancelar</button>
      </div>
      
    </div>
  )
}

export default ModalPublicar;