import {sum } from './number';
import { render,screen } from '@testing-library/react';
import { Afternoon } from './text';


it('should return 7 when summing 5 and 2.',()=>{
    const a:number = 10;
    expect(a).toBe(10);
    expect(sum(5,2)).toBe(7);
})

it('should render the text, Good afternoon!.',()=>{
    render(<Afternoon/>);
    const myElement = screen.getByText("Good afternoon!");
    expect(myElement).toBeInTheDocument();
})