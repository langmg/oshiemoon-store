
import './Shop.css'


export default function Shop() {
    

    return (
        <div className='shop'>
                <Filter/>
                <CurrShop/>
        </div>
    );
}


function CurrShop() {

    return (
        <section className='currShop'>
            <header>
                <p>Sort By</p>
                <button type='button' className='option'>
                    A-Z
                    <span className='material-symbols-rounded'>
                        sort
                    </span>
                </button>
                <button type='button' className='option'>
                    $
                    <span className='material-symbols-rounded'>
                        sort
                    </span>
                </button>
                <button type='submit'>
                    <span className='material-symbols-rounded'>
                        check_circle
                    </span>
                </button>
                <button type='reset'>
                    <span className='material-symbols-rounded'>
                        cancel
                    </span>
                </button>
            </header>
            <div className="shopGrid">
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
            </div>
        </section>
    )
}

function ShopItem(props) {

    return (
        <div className={'shopItem'}>
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


function Filter() {
    

    return (
        <section className='filter'>
            <header>
                <h2>Filter</h2>
            </header>
            <form>
                <div className='formBtns'>
                    <button type='submit' className="">
                        <span className="material-symbols-rounded">
                            check_circle
                        </span>
                    </button>
                    <button type='reset' className="">
                        <span className="material-symbols-rounded">
                            cancel
                        </span>
                    </button>
                </div>
                <div className='filterBtns'>
                    <button type='button' className="">
                        <span className="material-symbols-rounded">
                            
                        </span>
                        Price
                    </button>
                    <button type='button' className="">
                        <span className="material-symbols-rounded">
                            
                        </span>
                        Collection
                    </button>
                    <button type='button' className="">
                        <span className="material-symbols-rounded">
                            
                        </span>
                        Color
                    </button>
                    <button type='button' className="">
                        <span className="material-symbols-rounded">
                            
                        </span>
                        On-Sale
                    </button>
                </div>


            </form>
        </section>
    );
}