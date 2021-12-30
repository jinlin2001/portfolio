import React from 'react';

import Arbitrager from './Arbitrager';
import MultiChat from './MultiChat';
import { TAB_CARD_BODY } from './constants';
import Router from './Router';

function App() {
  return (
    <div className='card vh-100 border-0 rounded-0 bg-dark text-white'>
      <div className='card-header p-0 rounded-0 border-0'>
        <ul className='nav flex-nowrap justify-content-evenly'>
          <li className='nav-item'>
            <button
              className='btn btn-sm active'
              data-bs-toggle='tab'
              data-bs-target='#chatbox'>
              MultiChat&nbsp;
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
              Arbitrager&nbsp;
            </button>
          </li>
        </ul>
      </div>
      <div className={`${TAB_CARD_BODY} position-relative`}>
        <div
          className='accordion accordion-flush'
          id='about-me'
          style={{ zIndex: 10 }}>
          <div className='accordion-item rounded-0 border-0 bg-dark bg-gradient text-white'>
            <h2 className='accordion-header'>
              <button
                className='
              accordion-button
              collapsed
              bg-transparent
              shadow-none
              text-white
              py-0
            '
                data-bs-toggle='collapse'
                data-bs-target='#about-me-body'>
                About Me
              </button>
            </h2>
            <div
              id='about-me-body'
              className='accordion-collapse collapse'
              data-bs-parent='#about-me'>
              <div className='accordion-body'>
                <p>
                  A full-stack web developer with hands-on experience designing,
                  developing, and implementing applications and solutions using
                  a range of technologies and programming languages.
                </p>
                <p>
                  I am a computer systems technology graduate, Microsoft (MCSD:
                  App Builder) and (MCSA: Web Applications) certified.
                </p>
                <p>
                  I enjoy problem-solving, am passionate to learn new frameworks
                  and libraries, programming patterns, and continue to
                  strengthen my skills in software development.
                </p>
                <p>
                  LinkedIn Profile: <br />
                  <a
                    href='https://www.linkedin.com/in/jinlin2001/'
                    target='_blank'
                    rel='noreferrer noopener'>
                    https://www.linkedin.com/in/jinlin2001/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='tab-content h-100'>
          <div className='tab-pane fade show active h-100' id='chatbox'>
            <MultiChat />
          </div>
          <div className='tab-pane fade h-100' id='quick-route'>
            <Router />
          </div>
          <div className='tab-pane fade h-100' id='arbitrage'>
            <Arbitrager />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
