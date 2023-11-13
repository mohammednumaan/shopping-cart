import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Shop from '../src/components/Shop/Shop';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Cart from '../src/components/Cart/Cart';

describe('Cart Component', () => {
    it('Renders the correct heading', () => {
        render(
            <Cart />, {wrapper : BrowserRouter}
        )
        expect(screen.getByRole('heading', {name : 'Cart'})).toBeInTheDocument()
    })

    it('Renders empty message and total = 0 if cart is emmpty ', () => {
        render(
            <Cart />, {wrapper : BrowserRouter}
        )

        const data = JSON.parse(localStorage.getItem('cartItems')) || []
        if (data.length === 0){
            expect(screen.getByTestId('empty')).toBeInTheDocument()
            expect(screen.getByTestId('total').textContent).toBe('$0')
        }
        
    })

    it('Renders the cart, with total = 64', async () => {
        const data = [
            {'count' : 1,
             'id' : 9,
             'price' : 64,
             'title' : 'WD 2TB Elements Portable External Hard Drive - USB 3.0 '
            }
        ]

        localStorage.setItem('cartItems', JSON.stringify(data))

        render(
            <Cart />, {wrapper : BrowserRouter}
        )

        expect(screen.getByTestId('cart-item-9')).toBeInTheDocument()
        expect(screen.getByTestId('total').textContent).toMatch('$64')
    })

    it('It deletes an item from the cart upon click and changes the total to 0', async () => {
        
        const user = userEvent.setup()

        render(
            <Cart />, {wrapper : BrowserRouter}
        )

        expect(screen.getByTestId('cart-item-9')).toBeInTheDocument()
        
        const button = screen.getByTestId('cart-remove-item-9')
        await user.click(button)

        const data = JSON.parse(localStorage.getItem('cartItems'))
        expect(data.length).toBe(0)
        expect(screen.getByTestId('total').textContent).toMatch('$0')
    })
    
    
})