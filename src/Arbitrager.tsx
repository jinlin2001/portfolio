import React, { useEffect, useRef } from 'react';

import {
  DIV_TECH_ROW,
  TAB_CARD,
  TAB_CARD_BODY,
  TAB_CARD_BODY_FLEX,
  TAB_CARD_BODY_NAV,
  TECH_CARD_BORDERLESS,
  TECH_CARD_BODY,
  TECH_CARD_BODY_BORDER,
  TECH_CARD_IMG,
  TECH_CARD,
  LIST_GROUP,
  LIST_GROUP_ITEM,
} from './constants';
import { scrollSpy } from './utility';

function Arbitrager() {
  const ul_ref = useRef<HTMLUListElement>(null);
  const body_ref = useRef<HTMLDivElement>(null);
  const a_ref = useRef<HTMLAnchorElement>();

  useEffect(() => {
    a_ref.current = ul_ref.current!.querySelector(
      '#booster-about-a'
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
              href='#booster-about'
              id='booster-about-a'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='btn btn-sm'
              href='#booster-techs'
              id='booster-techs-a'>
              TECHs
            </a>
          </li>
          <li className='nav-item'>
            <a className='btn btn-sm' href='#booster-algo' id='booster-algo-a'>
              ALGO
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='btn btn-sm'
              href='#booster-captures'
              id='booster-captures-a'>
              IMGs
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='btn btn-sm'
              href='#booster-website'
              id='booster-website-a'>
              Links
            </a>
          </li>
        </ul>
        <div className='flex-fill overflow-auto'>
          <div className={TAB_CARD}>
            <div className={TAB_CARD_BODY} ref={body_ref}>
              <div
                className='container-fluid'
                id='booster-about'
                data-target='booster-about-a'>
                <h6>App Overview</h6>
                <p>
                  This web application fetches currency exchange rates from
                  Frankfurter API. Response data is then parsed and analyzed to
                  solve arbitrage profit opportunities.
                </p>
                <p>
                  Frankfurter API tracks 33 world-recognized currencies
                  published by the European Central Bank. According to the API
                  documentation, exchange rates are updated daily around 4 PM
                  central-eastern time.
                </p>
                <p>
                  Other application features include filtering, edit, and
                  importing data in JSON files. Application scripts are
                  trans-piled targeting the latest browsers. Internet Explorer
                  is not supported.
                </p>
                <span>
                  Support import JSON files with a data structure like the
                  following sample.
                </span>
                <pre className='mb-0'>
                  {`{
  "USD": {
    "EUR": 0.986,
    "GBP": 0.657
  },
  "EUR": {
    "USD": 1.349,
    "GBP": 0.888
  },
  "GBP": {
    "USD": 1.521,
    "EUR": 1.126
  }
}`}
                </pre>
              </div>

              <div
                className='container-fluid py-5'
                id='booster-techs'
                data-target='booster-techs-a'>
                <h6>Technologies Used</h6>
                <div className={DIV_TECH_ROW}>
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
                </div>
              </div>

              <div
                className='container-fluid pb-5'
                id='booster-algo'
                data-target='booster-algo-a'>
                <h6>Algorithm Brief</h6>
                <p>
                  To solve arbitrage profit opportunities, API data is parsed
                  and modeled as a graph with exchange rates as edge weights.
                  Then traversed the graph to find a cycle with a cost greater
                  than 1. A cycle cost is the multiplications product of the
                  weight of the edges in the cycle.
                </p>
                <p>
                  Implemented Bellman-Ford algorithm for negative graph cycle
                  detection. API data is translated such that a positive cycle
                  becomes a negative cycle.
                </p>
                <p className='mb-0'>
                  API data is translated by applying the math log function, then
                  negation. Applying the math log function allows the use of
                  addition instead of multiplication in calculating cycle costs.
                  Applying negation transforms a positive weight cycle into a
                  negative weight cycle.
                </p>
              </div>

              <div
                className='container-fluid'
                id='booster-captures'
                data-target='booster-captures-a'>
                <h6>Screen Captures</h6>
                <div className='row row-cols-1 gy-3'>
                  <div className='col-12 col-md-10 offset-md-1'>
                    <div className={TECH_CARD}>
                      <img
                        src='arbit-1.png'
                        alt='fullscreen layout'
                        className='card-img-top'
                      />
                      <div className={TECH_CARD_BODY}>
                        <small className='badge'>Full-Screen Layout</small>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-10 offset-md-1'>
                    <div className={TECH_CARD}>
                      <img
                        src='arbit-2.png'
                        alt='fullscreen layout 2'
                        className='card-img-top'
                      />
                      <div className={TECH_CARD_BODY}>
                        <small className='badge'>With Toast Notification</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id='booster-website'
                className='py-3'
                data-target='booster-website-a'>
                <div className={LIST_GROUP}>
                  <a
                    href='https://arbitrage-43861.firebaseapp.com/'
                    className={LIST_GROUP_ITEM}
                    target='_blank'
                    rel='noreferrer noopener'>
                    <span className='badge'>
                      Live App:&nbsp; https://arbitrage-43861.firebaseapp.com/
                    </span>
                  </a>
                  <a
                    href='https://github.com/jinlin2001/arbitrage'
                    className={LIST_GROUP_ITEM}
                    target='_blank'
                    rel='noreferrer noopener'>
                    <span className='badge'>
                      GitHub:&nbsp; https://github.com/jinlin2001/arbitrage
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
export default Arbitrager;
