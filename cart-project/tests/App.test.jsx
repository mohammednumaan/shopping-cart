import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/components/App/App';
import { BrowserRouter } from 'react-router-dom';




describe('App Componenet', () => {
    it('Renders correct heading and shop now link.', () => {
        render(
            <App />, {wrapper : BrowserRouter}
        );
        expect(screen.getByRole('heading').textContent).toBe('Shopping Cart');
        expect(screen.getByRole('link', {name : 'Shop Now'}).textContent).toBe('Shop Now')
    })

    it("Shop Now's href should link to /Shop", () => {

        render(
            <App />, {wrapper : BrowserRouter}
        );
        const button = screen.getByRole('link',{name : 'Shop Now'})
        expect(button.getAttribute('href')).toBe('/Shop')

    })

})

