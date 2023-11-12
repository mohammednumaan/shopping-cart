import { findByTestId, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Shop from '../src/components/Shop/Shop';
import { BrowserRouter } from 'react-router-dom';

const MockComponent = () => {
    return (
        <BrowserRouter>
            <Shop />
        </BrowserRouter>
    )
}

describe('Shop Component', () => {
    it('Renders the correct heading.', () => {
        render(
            <Shop />, {wrapper : BrowserRouter}
        );
        const heading = screen.getByRole('heading',{name : 'Shop'})
        expect(heading).toBeInTheDocument()
    })

    it('It renders the first product', async () => {
        render(<MockComponent />)     
        const firstProductElement = await screen.findByTestId("product-0",undefined, {timeout : 5000},)
        expect(firstProductElement).toBeInTheDocument()
    })

    it('It renders all the products', async () => {
        render(<MockComponent />)
        const productElements = await screen.findAllByTestId(/product/i, undefined, {timeout : 5000},)
        expect(productElements.length).toBe(6)

    })

  
})