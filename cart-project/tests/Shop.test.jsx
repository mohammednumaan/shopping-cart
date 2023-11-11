import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Shop from '../src/components/Shop/Shop';
import { BrowserRouter } from 'react-router-dom';
import { jest } from '@jest/globals';

// const data = [

//     {'category': "electronics",
//      'description': "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     //  'id': 9,
//      'image': "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//      'price': 64,
//     //  'rating': {rate: 3.3, count: 203},
//      'title': "WD 2TB Elements Portable External Hard Drive - USB 3.0"
//     },
// ]

jest.mock('../components/Product/Product', () => ({}) )

describe('Shop Componenet', () => {
    it('Renders Correct Heading.', () => {
        render(
            <BrowserRouter>
                <Shop />
            </BrowserRouter>
        );
        expect(screen.getByRole('heading',{name : 'Shop'}).textContent).toEqual('Shop');
    })

    it('Renders All The Data Correctly', async () => {
        render(
            <BrowserRouter>
                <Shop />
            </BrowserRouter>
            
        );
        // expect(screen.getByRole('link'))
        expect(screen.getByRole('heading', {name : data[0].title})).toBe('WD 2TB Elements Portable External Hard Drive - USB 3.0')        
    })

  
})