/* eslint-disable no-unused-vars */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/combineStore';
import Mission from '../pages/Mission';
import Nav from '../components/Navigation';
import Profile from '../pages/Profile';
import Rocket from '../pages/Rocket';

describe('Render All Components', () => {
  test('render navbar', () => {
    const { container } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
    <nav>
      <div className="logo">
        <img src={img} className="logo-img" alt="space pic" />
        <h2>Space Traveller Hub</h2>
      </div>
      <ul className="nav-items">
        <li>
          <NavLink className="link" to="/">Rockets</NavLink>
        </li>
        <li><NavLink className="link" to="/mission">Missions</NavLink></li>
        <li><NavLink className="link" to="/profile">My Profile</NavLink></li>
      </ul>
    </nav>
  `);
  });

  test('render Profile', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
  
  `);
  });

  test('render Rockets', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Rocket />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
  
  `);
  });
});
