import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/components/App/App';
import { BrowserRouter } from 'react-router-dom';




describe('App Componenet', () => {
    it('Renders correct heading and shop now link.', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect(screen.getByRole('heading').textContent).toEqual('Shopping Cart');
        expect(screen.getByRole('link', {name : 'Shop Now'}).textContent).toEqual('Shop Now')
    })

    it("Shop Now's href should link to /Shop", () => {

        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        const button = screen.getByRole('link',{name : 'Shop Now'})
        expect(button.getAttribute('href')).toBe('/Shop')

    })

  
})

