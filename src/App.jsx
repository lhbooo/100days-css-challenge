import React from 'react';
import './App.scss';
// import Day1 from './challenge/day1'
const Day1 = React.lazy(() => import('./challenge/day1'));
const Day2 = React.lazy(() => import('./challenge/day2'));
const Day3 = React.lazy(() => import('./challenge/day3'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>100 days css challenge</h1>
      </header>
      <main>
        <Day1></Day1>
        <Day2></Day2>
        <Day3></Day3>
        {/* <iframe height={'500px'} width={'500px'} src='https://cdpn.io/roydigerhund/fullembedgrid/PZxpKO?animations=run&type=embed'/> */}
      </main>
    </div>
  )
}

export default App
