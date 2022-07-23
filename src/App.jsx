import React from 'react';
import './App.scss';
// import Day1 from './challenge/day1'
const Day1 = React.lazy(() => import('./challenge/day1'));
const Day2 = React.lazy(() => import('./challenge/day2'));
const Day3 = React.lazy(() => import('./challenge/day3'));
const Day4 = React.lazy(() => import('./challenge/day4'));
const Day5 = React.lazy(() => import('./challenge/day5'));
const Day6 = React.lazy(() => import('./challenge/day6'));
const Day7 = React.lazy(() => import('./challenge/day7'));
const Day8 = React.lazy(() => import('./challenge/day8'));
const Day9 = React.lazy(() => import('./challenge/day9'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>100 days css challenge</h1>
      </header>
      <main className='challenge'>
        <Day1></Day1>
        <Day2></Day2>
        <Day3></Day3>
        <Day4></Day4>
        <Day5></Day5>
        <Day6></Day6>
        <Day7></Day7>
        <Day8></Day8>
        <Day9></Day9>
      </main>
      {/* <iframe height={'500px'} width={'500px'} src='https://cdpn.io/roydigerhund/fullembedgrid/XXOqoG?animations=run&type=embed'/> */}
    </div>
  )
}

export default App
