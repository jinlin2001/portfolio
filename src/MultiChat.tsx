import React, { useEffect, useRef } from 'react';

import {
  DIV_TECH_ROW,
  TAB_CARD,
  TAB_CARD_BODY,
  TAB_CARD_BODY_FLEX,
  TAB_CARD_BODY_NAV,
  TECH_CARD_BORDERLESS,
  TECH_CARD_BODY_BORDER,
  TECH_CARD_BODY_FLEX,
  TECH_CARD_IMG,
  TECH_CARD,
  TECH_CARD_BODY,
  LIST_GROUP_ITEM,
  LIST_GROUP
} from './constants';
import { scrollSpy } from './utility';

function MultiChat() {
  const ul_ref = useRef<HTMLUListElement>(null);
  const body_ref = useRef<HTMLDivElement>(null);
  const a_ref = useRef<HTMLAnchorElement>();

  useEffect(() => {
    a_ref.current = ul_ref.current!.querySelector(
      '#chatbox-about-a'
    ) as HTMLAnchorElement;
    body_ref.current!.addEventListener(
      'scroll',
      scrollSpy.bind(null, body_ref, ul_ref, a_ref)
    );
  }, []);

  return (
    <div className={TAB_CARD}>
      <div className={TAB_CARD_BODY_FLEX}>
        <ul className={TAB_CARD_BODY_NAV} ref={ul_ref}>
          <li className='nav-item'>
            <a
              className='btn btn-sm active'
              href='#chatbox-about'
              id='chatbox-about-a'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='btn btn-sm'
              href='#chatbox-schematic'
              id='chatbox-schematic-a'>
              SCHEM
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='btn btn-sm'
              href='#chatbox-techs'
              id='chatbox-techs-a'>
              TECHs
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='btn btn-sm'
              href='#chatbox-captures'
              id='chatbox-captures-a'>
              IMGs
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='btn btn-sm'
              href='#chatbox-website'
              id='chatbox-website-a'>
              Links
            </a>
          </li>
        </ul>
        <div className='flex-fill overflow-auto'>
          <div className={TAB_CARD}>
            <div className={TAB_CARD_BODY} ref={body_ref}>
              <div
                id='chatbox-about'
                className='container-fluid'
                data-target='chatbox-about-a'>
                <h6>App Overview</h6>
                <p>
                  This is a real-time multi-chat application. Users are allowed
                  to create one or more rooms and invite friends to join chat.
                  Each room is isolated and access protected with Firebase
                  Security Rules.
                </p>
                <p className='mb-0'>
                  Other application features include new user signup, login,
                  logout, password reset, search and add new friends.
                  Application scripts are trans-piled targeting latest browsers.
                  Internet Explorer is not supported.
                </p>
              </div>
              <div
                id='chatbox-schematic'
                className='container-fluid py-5'
                data-target='chatbox-schematic-a'>
                <h6>Schematic Diagram</h6>
                <div className='row'>
                  <div className='col-12'>
                    <div className='card'>
                      <img
                        src='chatbox-schematic.png'
                        alt='chatbox schematic'
                        className='card-img-top'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id='chatbox-techs'
                className='container-fluid pb-5'
                data-target='chatbox-techs-a'>
                <h6>Technologies Used</h6>
                <div className={DIV_TECH_ROW}>
                  <div className='col'>
                    <div className={TECH_CARD_BORDERLESS}>
                      <img
                        src='firebase-icon.svg'
                        alt='firebase'
                        className={TECH_CARD_IMG}
                      />
                      <div className={TECH_CARD_BODY_FLEX}>
                        <small className='badge text-wrap'>
                          Authentication, Cloud Functions, Realtime DB
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className={TECH_CARD_BORDERLESS}>
                      <img
                        src='react-icon.svg'
                        alt='react'
                        className={TECH_CARD_IMG}
                      />
                      <div className={TECH_CARD_BODY_BORDER}>
                        <small className='badge'>ReactJS</small>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className={TECH_CARD_BORDERLESS}>
                      <img
                        src='typescript-icon.svg'
                        alt='typescript'
                        className={TECH_CARD_IMG}
                      />
                      <div className={TECH_CARD_BODY_BORDER}>
                        <small className='badge'>Typescript</small>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className={TECH_CARD_BORDERLESS}>
                      <img
                        src='nodejs-icon.svg'
                        alt='nodejs'
                        className={TECH_CARD_IMG}
                      />
                      <div className={TECH_CARD_BODY_FLEX}>
                        <small className='badge'>NodeJS</small>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className={TECH_CARD_BORDERLESS}>
                      <img
                        src='mongodb-icon.svg'
                        alt='mongodb'
                        className={TECH_CARD_IMG}
                      />
                      <div className={TECH_CARD_BODY_FLEX}>
                        <small className='badge text-wrap'>
                          MongoDB Atlas, Mongoose
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className={TECH_CARD_BORDERLESS}>
                      <img
                        src='bootstrap-icon.svg'
                        alt='bootstrap 5'
                        className={TECH_CARD_IMG}
                      />
                      <div className={TECH_CARD_BODY_BORDER}>
                        <small className='badge'>Bootstrap 5</small>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className={TECH_CARD_BORDERLESS}>
                      <img
                        src='css-icon.svg'
                        alt='css 3'
                        className={TECH_CARD_IMG}
                      />
                      <div className={TECH_CARD_BODY_BORDER}>
                        <small className='badge'>CSS 3</small>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className={TECH_CARD_BORDERLESS}>
                      <img
                        src='html-icon.svg'
                        alt='html 5'
                        className={TECH_CARD_IMG}
                      />
                      <div className={TECH_CARD_BODY_BORDER}>
                        <small className='badge'>HTML 5</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id='chatbox-captures'
                className='container-fluid'
                data-target='chatbox-captures-a'>
                <h6>Screen Captures</h6>
                <div className='row row-cols-1 gy-3'>
                  <div className='col col-lg-10 offset-lg-1'>
                    <div className={TECH_CARD}>
                      <img
                        src='chatbox-full.png'
                        alt='fullscreen layout'
                        className='card-img-top'
                      />
                      <div className={TECH_CARD_BODY}>
                        <small className='badge'>Full-Screen Layout</small>
                      </div>
                    </div>
                  </div>
                  <div className='col-10 offset-1 col-md-8 offset-md-2'>
                    <div className={TECH_CARD}>
                      <img
                        src='chatbox-mid.png'
                        alt='midscreen layout'
                        className='card-img-top'
                      />
                      <div className={TECH_CARD_BODY}>
                        <small className='badge'>Mid-Screen Layout</small>
                      </div>
                    </div>
                  </div>
                  <div className='col-8 offset-2 col-md-6 offset-md-3'>
                    <div className={TECH_CARD}>
                      <img
                        src='chatbox-mobile.png'
                        alt='mobile layout'
                        className='card-img-top'
                      />
                      <div className={TECH_CARD_BODY}>
                        <small className='badge'>Mobile Layout</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id='chatbox-website'
                className='py-3'
                data-target='chatbox-website-a'>
                <div className={LIST_GROUP}>
                  <a
                    href='https://chatbox-3c9c2.firebaseapp.com/'
                    className={LIST_GROUP_ITEM}
                    target='_blank'
                    rel='noreferrer noopener'>
                    <span className='badge'>
                      Live App: https://chatbox-3c9c2.firebaseapp.com/
                    </span>
                  </a>
                  <a
                    href='https://github.com/jinlin2001/chatbox'
                    className={LIST_GROUP_ITEM}
                    target='_blank'
                    rel='noreferrer noopener'>
                    <span className='badge'>
                      GitHub: https://github.com/jinlin2001/chatbox
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MultiChat;
