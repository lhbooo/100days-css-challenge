import { useState } from 'react'
import './index.scss';

const Day2 = () => {
  const [showClose, setShowClose] = useState(false)
  const [count, setCount] = useState(0)
  const clickWapper = () => {
    !count && setCount(count + 1)
    setShowClose(!showClose)
  }

  return (
    <div className="frame day2">
      <div className={`wapper ${showClose ? 'is-close' : ''}`} onClick={clickWapper}>
        <div className={`line line-one ${ count ? '' : 'no-animation'}`}></div>
        <div className={`line line-two ${ count ? '' : 'no-animation'}`}></div>
        <div className={`line line-three ${ count ? '' : 'no-animation'}`}></div>
      </div>
    </div>
  )
}

export default Day2
