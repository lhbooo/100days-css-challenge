import { useState } from 'react';
import './App.scss';
import Day1 from './challenge/day1'
import Day2 from './challenge/day2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>100 days css challenge</h1>
      </header>
      <main>
        <Day1></Day1>
        <iframe height={'500px'} width={'500px'} src='https://cdpn.io/roydigerhund/fullembedgrid/JGmvaE?animations=run&type=embed'/>
        {/* <Day2></Day2> */}
      </main>
    </div>
  )
}

export default App
