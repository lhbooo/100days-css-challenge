import React,{useRef} from 'react'
import './index.scss';

function Day5() {
  const bg = useRef(null);
  const ball = useRef(null)
  const handleClick = (num) => {
    const index = num - 1;
    bg.current.style.transform = 'translateX(-' + index * 400 + 'px)'
    ball.current.style.left = 50 * index + 15 * index + 5 + 'px'
  }
  return (
    <div className="frame day5">
      <div className="center">
        <div className="circle c1" onClick={() => handleClick(1)}></div>
        <div className="circle c2" onClick={() => handleClick(2)}></div>
        <div className="circle c3" onClick={() => handleClick(3)}></div>
        <div ref={ball} className="ball"></div>
      </div>
      <div ref={bg} className='bg'>
        <div className="bg-1"></div>
        <div className="bg-2"></div>
        <div className="bg-3"></div>
      </div>
    </div>
  )
}

export default Day5