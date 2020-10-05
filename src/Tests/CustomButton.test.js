import React from 'react';
import { findByTestAttribute } from './Utils';
import CustomButton from '../Components/CustomButton/CustomButton';
import { shallow } from 'enzyme';

describe('Custom button', () => {

    let ButtonWrap;
    beforeEach(() => {
        const buttonProps = {
            link: "https://testlink.com",
            text: "button text"
        }
        ButtonWrap = shallow(<CustomButton {...buttonProps}/> )
    })

    
    it('Should render correctly', () => {
       const button = findByTestAttribute(ButtonWrap, 'button-test');
       expect(button.length).toBe(1);
    })

    it('Should recieve link prop', () => {
        const button = findByTestAttribute(ButtonWrap, 'button-test');
        expect(button.prop('href')).toEqual("https://testlink.com");
    })

    it('Should receive text prop', () => {
        const button = findByTestAttribute(ButtonWrap, 'button-test');
        expect(button.props().children).toEqual("button text");
    })
})


