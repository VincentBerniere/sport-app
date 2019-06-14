import React from 'react';
import { shallow } from 'enzyme'; 
import Login from './Login';

const login = shallow(<Login />);

describe('Login', () => {
    it('renders correctly', () => {
        expect(login).toMatchSnapshot();
    });

    describe('when typing into the login inputs', () => {
        const email = 'test@gmail.com';
        const password = '123456789';

        beforeEach(() => {
            login.find('#email').simulate('change', { target: { value: email } });
            login.find('#password').simulate('change', { target: { value: password } });
        });

        it('update the email in `state`', () => {
            expect(login.state().email).toMatchSnapshot(email);
        });

        it('update the password in `state`', () => {
            expect(login.state().password).toMatchSnapshot(password);
        });

        it('submit the form', () => {
            login.instance().onLoginFormSubmit = jest.fn();

            login.find('.ui.primary.button').simulate('click');

            expect(login.instance().onLoginFormSubmit).toHaveBeenCalled();
        });
    });
});
