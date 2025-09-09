import { useSelector } from 'react-redux';
import './Alerts.css';
import { RootState } from '../../store';
import BotaoExcluirAlert from '../Botoes/BotaoExcluirAlert';

const Alerts = () => {
  const selectedUser = useSelector((state: RootState) => state.user.selectedUser)

  if ((selectedUser[0]?.alert?.length ?? 0) > 0) {
    return (
      <div className='alerts-container'>
        {(selectedUser[0]?.alert ?? []).map((alert, idx) => (
          <div key={idx} className={`message-box ${alert.message === 'Tem uma nova publicação !' ? 'post' : 'alert'}`}>
              <div className='image-container'>
                <img className='image' src={alert.image.png}></img>
              </div>
              <div className='info'>
                <div className='name'>
                  {alert.name}
                </div>
                <div className='message'>
                  <div className='message-text'>
                    {alert.message}
                  </div>
                  <BotaoExcluirAlert
                    userId={selectedUser[0]._id}
                    alertId={alert._id}
                  />
                </div>
                
              </div>
            </div>
        ))}
      </div>
    )

    if ((selectedUser[0]?.alert?.length ?? 0) > 0) {
      return (
        <div className='alerts-container'>
        </div>
      )
    }
  }
}

export default Alerts;