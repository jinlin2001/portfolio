import React from 'react';

import Arbitrage from './Arbitrage';
import ChatBox from './ChatBox';
import { TAB_CARD_BODY } from './constants';
import Router from './Router';

function App() {
  return (
    <div className='card vh-100 border-0 rounded-0 bg-dark text-white'>
      <div className='card-header p-0 rounded-0 border-0'>
        <ul className='nav flex-nowrap justify-content-md-evenly'>
          <li className='nav-item'>
            <button
              className='btn btn-sm active'
              data-bs-toggle='tab'
              data-bs-target='#chatbox'>
              ChatBox&nbsp;
            </button>
          </li>
          <li className='nav-item'>
            <button
              className='btn btn-sm'
              data-bs-toggle='tab'
              data-bs-target='#quick-route'>
              Router&nbsp;
            </button>
          </li>
          <li className='nav-item'>
            <button
              className='btn btn-sm'
              data-bs-toggle='tab'
              data-bs-target='#arbitrage'>
              $Boost&nbsp;
            </button>
          </li>
        </ul>
      </div>
      <div className={TAB_CARD_BODY}>
        <div className='tab-content h-100'>
          <div className='tab-pane fade show active h-100' id='chatbox'>
            <ChatBox />
          </div>
          <div className='tab-pane fade h-100' id='quick-route'>
            <Router />
          </div>
          <div className='tab-pane fade h-100' id='arbitrage'>
            <Arbitrage />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
