import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome/Welcome';
import { Invitation } from './components/Invitation/Invitation';
import { Calendar } from './components/Calendar/Calendar';
import { CountDown } from './components/CountDown/CountDown';
import { Timeline } from './components/Timeline/Timeline';
import { Leaf } from './components/Leaf/Leaf';

function App() {
  return (
    <div className="App-container">
      <div className="App">
        <div className='row'>
          <img src={"/assets/back/pink.svg"}
          ></img>
          <img src={"/assets/back/yellow.svg"}
          ></img>
        </div>
        { <Leaf /> }
        {/* <Break  type={0}/> */}
        { <Welcome />}
        {/*<Break type={4} /> */}
        {<>
        <Invitation />
        <Timeline/>
        <Calendar date='2025-10-17' />
        <CountDown date='2025-10-17 18:00' />

        </>
        /*
        <Break type={2} />
        <Picture />
        <Break type={3} />
        <Calendar date='2022-11-19' />
        <CountDown date='2022-11-19 11:00' />
        <Break type={0} />
        <Way />
        <Break type={1} />
        <Bank />
        <Break type={5} />
        <Contact /> */}
        <div className='row tail'>
          <img src={"/assets/back/pink2.svg"}
          ></img>
          <img src={"/assets/back/yellow2.svg"}
          ></img>
        </div>

      </div>
    </div>
  );
}

export default App;
