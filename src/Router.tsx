import React, { useEffect, useRef } from 'react';

import {
  DIV_TECH_ROW,
  TAB_CARD,
  TAB_CARD_BODY,
  TAB_CARD_BODY_FLEX,
  TAB_CARD_BODY_NAV,
  TECH_CARD_BODY,
  TECH_CARD_BODY_BORDER,
  TECH_CARD_IMG,
  TECH_CARD,
  TECH_CARD_BORDERLESS,
  LIST_GROUP,
  LIST_GROUP_ITEM,
  CARD_FOOTER,
} from './constants';
import { scrollSpy } from './utility';

function Router() {
  const ul_ref = useRef<HTMLUListElement>(null);
  const body_ref = useRef<HTMLDivElement>(null);
  const a_ref = useRef<HTMLAnchorElement>();

  useEffect(() => {
    a_ref.current = ul_ref.current!.querySelector(
      '#route-about-a'
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
              href='#route-about'
              id='route-about-a'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='btn btn-sm' href='#route-techs' id='route-techs-a'>
              TECHs
            </a>
          </li>
          <li className='nav-item'>
            <a className='btn btn-sm' href='#route-algo' id='route-algo-a'>
              ALGO
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='btn btn-sm'
              href='#route-captures'
              id='route-captures-a'>
              IMGs
            </a>
          </li>
        </ul>
        <div className='flex-fill overflow-auto'>
          <div className={TAB_CARD}>
            <div className={TAB_CARD_BODY} ref={body_ref}>
              <div
                className='container-fluid'
                id='route-about'
                data-target='route-about-a'>
                <h6>App Overview</h6>
                <p>
                  This web application produces the shortest distance route from
                  inputs of an origin, a destination and one or more stops.
                  Application was inspired by food delivery personnel at
                  restaurants, this web application can help plan the best route
                  by distance.
                </p>
                <p>
                  The application calls Google Distance Matrix API and Geocoding
                  API for distance metrics. With response metrics, application
                  then runs implemented algorithm to solve for shortest distance
                  route.
                </p>
                <p className='mb-0'>
                  Application scripts are trans-piled targeting latest browsers.
                  Internet Explorer is not supported.
                </p>
              </div>

              <div
                className='container-fluid py-5'
                id='route-techs'
                data-target='route-techs-a'>
                <h6>Technologies Used</h6>
                <div className={DIV_TECH_ROW}>
                  <div className='col'>
                    <div className={TECH_CARD_BORDERLESS}>
                      <img
                        src='google-icon.svg'
                        alt='google maps'
                        className={TECH_CARD_IMG}
                      />
                      <div className={TECH_CARD_BODY_BORDER}>
                        <small className='badge text-wrap'>
                          Google Maps Platform
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
                  <div className='col'>
                    <div className={TECH_CARD_BORDERLESS}>
                      <img
                        src='regex-icon.svg'
                        alt='regex'
                        className={TECH_CARD_IMG}
                      />
                      <div className={TECH_CARD_BODY_BORDER}>
                        <small className='badge'>Regex</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='container-fluid pb-5'
                id='route-algo'
                data-target='route-algo-a'>
                <h6>Algorithm Brief</h6>
                <p>
                  Application problem is like the Traveling Salesman Problem
                  (NP-complete). Greedy approach does not guarantee a shortest
                  distance route. Best approach is to brute force all
                  permutations with dynamic programming. The algorithm runtime
                  is (N
                  <sup>2</sup> * 2<sup>N</sup>). N factorial (N!), if
                  implemented without dynamic programming.
                </p>
                <p>
                  If N is 20, N! = 2,551,082,656,125,828,464,640,000, (N
                  <sup>2</sup> * 2<sup>N</sup>) = 419,430,400.
                </p>
                <p className='mb-0'>
                  The shortest route is build by append each stop to partial
                  route and memorized the best. A partial route is memorized by
                  the last stop in route, route combination and route cost.
                </p>
              </div>

              <div
                className='container-fluid pb-1'
                id='route-captures'
                data-target='route-captures-a'>
                <h6>Screen Captures</h6>
                <div className='row row-cols-1 gy-3'>
                  <div className='col col-lg-10 offset-lg-1'>
                    <div className={TECH_CARD}>
                      <img
                        src='route-1.png'
                        alt='fullscreen layout'
                        className='card-img-top'
                      />
                      <div className={TECH_CARD_BODY}>
                        <small className='badge'>Full-Screen Layout</small>
                      </div>
                    </div>
                  </div>
                  <div className='col-10 col-md-6 offset-1 offset-md-3'>
                    <div className={TECH_CARD}>
                      <img
                        src='route-2.png'
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
            </div>
            <div className={CARD_FOOTER}>
              <div className={LIST_GROUP}>
                <a
                  href='https://router-46be8.firebaseapp.com/'
                  className={LIST_GROUP_ITEM}
                  target='_blank'
                  rel='noreferrer noopener'>
                  <span className='badge'>
                    Live App:&nbsp; https://router-46be8.firebaseapp.com/
                  </span>
                </a>
                <a
                  href='https://github.com/jinlin2001/router'
                  className={LIST_GROUP_ITEM}
                  target='_blank'
                  rel='noreferrer noopener'>
                  <span className='badge'>
                    GitHub:&nbsp; https://github.com/jinlin2001/router
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Router;
