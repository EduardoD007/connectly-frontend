import './TabsPerfil.css'
import { TypeActiveTabPerfil } from '../../Types/TypeActiveTabPerfil';

const TabsPerfil = ( { activeTab, changeActiveTab }: TypeActiveTabPerfil) => {

  return (
    <div className='tabs-container'>
      <div className='header'>
        <button className={`button-feed ${activeTab === "feed" ? "active" : "inactive"}`}
          onClick={() => changeActiveTab("feed")}
        >Feeds</button> 
        <button className={`button-post  ${activeTab === "posts" ? "active" : "inactive"}`}
          onClick={() => changeActiveTab("posts")}
        >Publicações</button>
      </div>
    </div>
  )
}

export default TabsPerfil;