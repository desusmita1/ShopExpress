import { TextEncoder, TextDecoder } from 'util';
import 'whatwg-fetch';
import '@testing-library/jest-dom';
import React from 'react';
global.React = React;

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;