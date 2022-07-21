module.exports = {
  jsxTemplate: day => `import './index.scss';

const Day${day} = () => {
  return (
    <div className="frame day${day}">
    </div>
  )
}

export default Day${day}
  `,
  scssTemplate: day => `.day${day}{
  display: flex;
  justify-content: center;
  align-items: center;
}`
}
