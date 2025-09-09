import { api } from '../../../api/api';
import { useAppDispatch } from '../../../hooks';
import { getUser } from '../../../store/reducers/userReducer';
import { TypeBotaoExcluiAlertProps } from '../../../Types/TypeBotaoExcluiAlertProps';
import './BotaoExlcuirAler.css'
import { TiDeleteOutline } from "react-icons/ti";

const BotaoExcluirAlert = ({ alertId, userId}: TypeBotaoExcluiAlertProps) => {
  const dispatch = useAppDispatch()

  const deleteAlert = async () => {
    const response = await api.deleteAlert(userId,"undefined", alertId)
    await dispatch(getUser(userId))
    return response.json()
  }
  
  return (
    <div >
      <button className='botao-excluir-alert' onClick={deleteAlert}>
        <TiDeleteOutline size={22}/>
      </button>
    </div>
  )
}

export default BotaoExcluirAlert;