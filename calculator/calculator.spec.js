import React from 'react';
import Calculator from './calculator';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const { add } = require('./calculator.js');

// test away!
describe('calculator.js', () => {

    describe('add()',() => {
        it('should return the sum of numbers passed in', () => {

            expect(add(2,3)).toBe(5)
        })
    })
    
})