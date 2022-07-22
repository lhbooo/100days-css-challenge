import './index.scss';
import { useRef } from 'react'

const Day8 = () => {
  const day8 = useRef(null);
  const showMenu = () => {
    if(day8.current.classList.contains('is-active')) {
      day8.current.classList.remove('is-active');
    }else {
      day8.current.classList.add('is-active');
    }

  }

  return (
    <div ref={day8} className="frame day8">
      <ul className="menu">
        <li className="menu-item">Dashboard</li>
        <li className="menu-item">Profile</li>
        <li className="menu-item">Notification</li>
        <li className="menu-item">Messages</li>
        <li className="menu-item">Settings</li>
      </ul>
      <div className="main">
        <header className="header">
          <div className="switch" onClick={() => showMenu()}>
            <div className="line-top"></div>
            <div className="circle"></div>
            <div className="line-bottom"></div>
          </div>
          <h4 className='title'>Notifications</h4>
        </header>
        <div className="content">
          <div className="notifications">
            <div className="line"></div>
            <div className="notification">
              <div className='point'></div>
              <span className="time">9:24 AM</span>
              <p>
                <b>John Walker</b>
                <span> posted a photo on your wall.</span>
              </p>
            </div>
            <div className="notification">
              <div className='point'></div>
              <span className="time">8:19 AM</span>
              <p>
                <b>Alice Parker</b>
                <span> commented your last post.</span>
              </p>
            </div>
            <div className="notification">
              <div className='point'></div>
              <span className="time">Yesterday</span>
              <p>
                <b>Luke Wayne</b>
                <span> added you as friend.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Day8
  