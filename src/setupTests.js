/* eslint-disable no-console */
import React from 'react';
import { mount, shallow, render, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';
import 'jest-canvas-mock';
import sinon from 'sinon';
import '@testing-library/jest-dom/extend-expect';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

configure({ adapter: new Adapter() });

if (!process.env.LISTENING_TO_UNHANDLED_REJECTION) {
  process.on('unhandledRejection', (reason) => {
    throw reason;
  });
  process.env.LISTENING_TO_UNHANDLED_REJECTION = true;
}

global.ResizeObserver = require('resize-observer-polyfill');
global.React = React;
global.shallow = shallow;
// global.render = render;
global.mount = mount;
global.sinon = sinon;

global.mockFn = jest.fn();
global.console = {
  log: console.log,
  error: console.error,
  // warn: jest.fn(),
  info: console.info,
  debug: console.debug,
  group: jest.fn(),
  groupEnd: jest.fn()
};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: undefined,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
