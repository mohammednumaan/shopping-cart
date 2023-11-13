import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Shop from '../src/components/Shop/Shop';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import getData from '../src/components/Shop/Data';

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

    it('It renders the loading screen', () => {
        render(<MockComponent />)
        const loadingText = screen.getByRole('heading', {name : 'Loading...'})
        expect(loadingText).toBeInTheDocument()
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

    it('Adds Item To The Carts on click', async () => {
        const user = userEvent.setup()


        render(<MockComponent />)

        const button = await screen.findByTestId('btn-0', {name : /Add To Cart/i}, undefined, {timeout : 5000})
        await user.click(button)
        
        const cartData = await JSON.parse(localStorage.getItem('cartItems'))
        expect(cartData.length).toBe(1)
        expect(cartData[0].title).toMatch('WD 2TB Elements Portable External Hard Drive - USB 3.0')

    })

})