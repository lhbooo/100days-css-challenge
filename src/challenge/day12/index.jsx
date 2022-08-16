import './index.scss';

const Day12 = () => {
  const imgs = [
    'https://img1.baidu.com/it/u=2979841003,2996280738&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img0.baidu.com/it/u=834735354,834696588&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img2.baidu.com/it/u=849491682,3532379181&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
    'https://img2.baidu.com/it/u=1174058548,1218164293&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img1.baidu.com/it/u=3542872078,342700250&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img0.baidu.com/it/u=2292490386,1730275027&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img2.baidu.com/it/u=467067500,2693931583&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img2.baidu.com/it/u=3488603434,1809958968&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img0.baidu.com/it/u=1380902769,3684789015&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
  ]
  return (
    <div className="frame day12">
      { imgs.map((src, index) => 
        <img 
          onClick={ e => e.target.classList.toggle('active')}
          key={src} 
          className={ `pic pic-${index + 1}` } 
          src={src} 
          alt="图片" 
        />
      )}
    </div>
  )
}

export default Day12
  