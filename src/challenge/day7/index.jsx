import './index.scss';

const Cell = (props) => {
  return (
    <div className='cell'>
      <h3>{ props.quantity }</h3>
      <div>{ props.category }</div>
    </div>
  )
}

const Day7 = () => {
  return (
    <div className="frame day7">
      <div className="wapper">
        <aside className="left">
          <div className="avatar">
            <div className='round-1'></div>
            <div className='round-2'></div>
            <img src="https://100dayscss.com/codepen/jessica-potter.jpg" alt="avatar" />
          </div>
          <div className="introduction">
            <h4 className='name'>Jessica Potter</h4>
            <div className='job'>Visual Artist</div>
          </div>
          <div className="actions">
            <button className="follow">Follow</button>
            <button className="message">Message</button>
          </div>
        </aside>
        <aside className="right">
          <Cell quantity='523' category='Posts' />
          <Cell quantity='1387' category='Likes' />
          <Cell quantity='146' category='Follower' />
        </aside>
      </div>
    </div>
  )
}

export default Day7
  