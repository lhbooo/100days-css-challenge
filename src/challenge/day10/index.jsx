import './index.scss';

const Day10 = () => {
  const cloud = Array.from({length: 5}, (_, i) => i + 1);
  const raindrop = Array.from({length: 1}, (_, i) => i + 1);
  return (
    <div className="frame day10">
      <div className="view">
        <div className="moon">
          <div className="point-1"></div>
          <div className="point-2"></div>
          <div className="point-3"></div>
          <div className="point-4"></div>
          <div className="point-5"></div>
          <div className="point-6"></div>

        </div>
        { cloud.map(index => (
          <div key={'cloud' + index} className={`cloud-${index}`}></div>
        ))}

        {
          raindrop.map( index => (
            <div key={'raindrop' + index} className={ 'raindrop-' + index }></div>
          ))
        }

      </div>
    </div>
  )
}

export default Day10
  