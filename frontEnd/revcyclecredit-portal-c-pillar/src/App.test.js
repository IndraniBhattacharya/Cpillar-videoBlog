import React from 'react';
import App , {Page404} from './App';
import { BrowserRouter, Switch } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from './Views/HomePage/HomePage';
import CollabCommunicate from './Views/CollabComunicate/CollabCommunicate';
configure({ adapter: new Adapter() });


describe('renders without crashing', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });
});

describe ("Test Sidebar Component", () => {
  const sidebarComponent = mount (<App/>);

  it ("Should contain class header div", () => {
    expect (sidebarComponent.exists ('div.AppHeader')).toEqual (false);
  });

  it ("Should contain class footer div", () => {
    expect (sidebarComponent.exists ('div.footer')).toEqual (false);
  });

})

describe('routes using memory router', () => {
  it('should show Home component for / router (using memory router)', () => {
    const component = mount( <MemoryRouter initialEntries = {['/']} >
        <App/>
      </MemoryRouter>
    );
    expect(component.find(HomePage)).toHaveLength(1);
  })

})

describe('routes using memory router', () => {
  it('should show CollabCommunicate component for /CollabAndCommunicate router (using memory router)', () => {
    const component = mount( <MemoryRouter initialEntries = {['/CollabAndCommunicate']} >
        <App/>
      </MemoryRouter>
    );
    expect(component.find(CollabCommunicate)).toHaveLength(0);
  })
})

describe ("Test App COmponent", () => {
  const appComponent = mount (<App/>);
    it ("Should contain 1 browserrouter", () => {
      expect (appComponent.find (BrowserRouter).length).toEqual (1);
    })

    it ("Should contain 1 switch", () => {
      expect (appComponent.find (Switch).length).toEqual (1);
    })
})