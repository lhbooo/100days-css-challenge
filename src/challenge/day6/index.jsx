import './index.scss';


const detailsFn = () => {
  return () => {
    // 事件处理逻辑
  }
}


const Day6 = () => {
  return (
    <div className='frame day6'>
      <div className='wapper'>
        <header className='header'>
          <div className='date-info'>
            <h4>WEEKLY REPORT</h4>
            <span>01. Feb - 07. Feb</span>
          </div>
          <div className='price-info'>
            <span>Revenue</span>
            <h4>$3621.79</h4>
          </div>
        </header>
        <div className='main'>
          <div className='table'>
            <div className="cell cell-1">
              <span className='short-line red'></span>
              <span className='explain-text'>Views</span>
              <span className='short-line blue'></span>
              <span className='explain-text'>Purchases</span>
            </div>
            <div className="cell cell-2">
              <svg className='line-red'>
                <polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"></polyline>
              </svg>
              <div className='point-1'>
                <div className='tooltip'>428</div>
              </div>
              <div className="point-2">
                <div className='tooltip'>512</div>
              </div>
              <div className="point-3">
                <div className='tooltip'>531</div>
              </div>
              <div className="point-4">
                <div className='tooltip'>341</div>
              </div>
              <div className="point-5">
                <div className='tooltip'>412</div>
              </div>
              <div className="point-6">
                <div className='tooltip'>528</div>
              </div>
              <div className="point-7">
                <div className='tooltip'>228</div>
              </div>
            </div>
            <div className="cell cell-3">
              <svg className='line-blue'>
                <polyline points="9,20 50,11 90,25 130,20 171,23 211,35 251,17"></polyline>
              </svg>
              <div className="point-1">
                <div className='tooltip'>528</div>
              </div>
              <div className="point-2">
                <div className='tooltip'>128</div>
              </div>
              <div className="point-3">
                <div className='tooltip'>228</div>
              </div>
              <div className="point-4">
                <div className='tooltip'>428</div>
              </div>
              <div className="point-5">
                <div className='tooltip'>218</div>
              </div>
              <div className="point-6">
                <div className='tooltip'>421</div>
              </div>
              <div className="point-7">
                <div className='tooltip'>20</div>
              </div>
            </div>
          </div>
          <footer className='date'>
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
            <span>SUN</span>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Day6