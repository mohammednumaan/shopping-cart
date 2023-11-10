import { render, screen } from '@testing-library/react';
import { describe, it, expect, expectTypeOf } from 'vitest';
import App from '../src/components/App/App';
import userEvent from '@testing-library/user-event';


describe('App Componenet', () => {
    it('Renders Correct Heading and Shop Now Link.', () => {
        render(<App />);
        expect(screen.getByRole('heading').textContent).toMatch(/Shopping Cart/i);
        expect(screen.getByRole('link', {name : 'Shop Now'}).textContent).toMatch(/Shop Now/i)
    })

    it('On User Click, it should route the user to /Shop', async () => {

        const user = userEvent.setup()

        render(<App />);
        const button = screen.getByRole('link',{name : 'Shop Now'})

        await user.click(button)
        expect(screen.getByRole('heading').textContent).toMatch('Shop')
        expect(screen.getByRole('link',{name : 'Shop Now'})).toBe(false)

    })
  
})

