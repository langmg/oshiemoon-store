import { NavLink } from "react-router";
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router';


import './header.css'
export default function Header(){

    return (
        <header className='PageHeader'>
            <NavLink to='../' className='title'>
                <h1 title='oshiemoon.shop'>oshiemoon.shop</h1>
            </NavLink>

            <button type='button' className=''>
                <span className="material-symbols-rounded">
                    shopping_bag
                </span>
            </button>

            <NavLink to='/support' className='support'>
                <span className="material-symbols-rounded">
                    help
                </span>
            </NavLink>
        </header>
    );
}


function Cart() {
    return (
        <button type='button' className=''>
            <span></span>
        </button>
    );
}