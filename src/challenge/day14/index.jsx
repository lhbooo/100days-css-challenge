import { useState } from 'react';
import './index.scss';

const Day14 = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="frame day14">
      <div className='count-button'>
        <div className='count-button__decrease' onClick={() => setCount(count - 1)}>
          <div className='line'></div>
        </div>
        <div className='count-button__number'>{ count }</div>
        <div className='count-button__increase' onClick={() => setCount(count + 1)}>
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
  