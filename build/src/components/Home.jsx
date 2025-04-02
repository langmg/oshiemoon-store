import { BrowserRouter, Routes, Route, NavLink, Navigate, Link} from 'react-router';
import './Home.css';

export default function Home() {

    return (
        <div className='homePage'>
            <div className='logo'>
             <img src='../stolen_banner.avif'/>
            </div>
            <Latest/>

            <section className='shop pop-in'>
                <header>
                    <h2>See All Items</h2>
                </header>
                <Link to='/shop' className=''>
                    Shop
                </Link>
            </section>  

            <Socials/>

            <Support/> 
        </div>
    );
}


function Latest() {

    return (
        <section className='latest'>    
            <header className='pop-in'>
                <h2>Latest Items</h2>
            </header>
            <LatestItems/>
        </section> 
    );
}

function LatestItems() {

    return (
        <div className='items pop-in'>
            <button type='button' className=''>
                <span className='material-symbols-rounded'>chevron_left</span>
            </button>
            <div className='item-select'>
                <ShopItem curr={false}/>
                <ShopItem curr={true}/>
                <ShopItem curr={false}/>
            </div>
            <button type='button' className=''>
                <span className='material-symbols-rounded'>chevron_right</span>
            </button>
        </div>
    );
}

function ShopItem({curr}) {

    return (
        <div className={'shopItem '+ (curr ? 'curr':'')}>
            <button to='' className='wish'>
                <span className='material-symbols-rounded'>favorite</span>
            </button>
            <img className=''/>
            <p className='name'>[Product Name]</p>
            <p className='price'>$00.00</p>

            <button type='button' className='cart'>
                Add To Cart
            </button>
        </div>
    )
}


function Socials() {

    return (
        <section className='socials'>
            <header className='pop-in'>
                <h2>Socials</h2>
            </header>
            <div className='links pop-in'>
                <a href='https://www.instagram.com/oshiemoon/' className=''>
                    <h3>Instagram</h3>
                    <img src='./instagram-logo.webp' className=''/>
                    <p>@oshiemoon</p>
                </a>
                <a href='https://www.twitch.tv/oshiemoon' className=''>
                    <h3>Twitch</h3> 
                    <img src='./twitch-logo.png' className=''/>
                    <p>@oshiemoon</p>
                </a>
                <a href='' className=''>
                    <h3>Youtube</h3>
                    <img src='./youtube-logo.png' className=''/>
                    <p>@oshiemoon</p>
                </a>
            </div>
        </section>
    );
}

function Support() {
    
    return (
        <section className='support'>
            <header>
                <h2>Customer Support</h2>
            </header>
            <NavLink to='' className=''>
                Support
            </NavLink>
        </section>
    );
}