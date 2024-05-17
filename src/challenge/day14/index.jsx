import { useRef, useState } from 'react';
import './index.scss';

const Day14 = () => {
  const numberRef = useRef(null)
  const [count, setCount] = useState(0)
  const [preCount, setPreCount] = useState(0)

  const decreaseCount = () => {
    const dom = numberRef.current
    dom.innerHTML = ''
    const fadeOut = document.createElement('span')
    fadeOut.className = 'fade-out';
    fadeOut.innerText = count;

    const fadeIn = document.createElement('span')
    fadeIn.className = 'fade-in';
    fadeIn.innerText = count - 1;
    setCount(count - 1)
    dom.append(fadeOut);
    dom.append(fadeIn);
  }

  const increaseCount = () => {
    const dom = numberRef.current
    dom.innerHTML = ''
    const fadeOut = document.createElement('span')
    fadeOut.className = 'fade-out';
    fadeOut.innerText = count;

    const fadeIn = document.createElement('span')
    fadeIn.className = 'fade-in';
    fadeIn.innerText = count + 1;
    setCount(count + 1)
    dom.append(fadeOut);
    dom.append(fadeIn);
  }

  return (
    <div className="frame day14">
      <div className='count-button'>
        <div className='count-button__decrease' onClick={decreaseCount}>
          <div className='line'></div>
        </div>
        <div className='count-button__number' ref={numberRef}>

        </div>
        <div className='count-button__increase' onClick={increaseCount}>
          <div className='plus'>
            <div className='plus-h'></div>
            <div className='plus-v'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Day14
  