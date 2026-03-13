import { CgProfile } from "react-icons/cg";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchActions } from "../store/searchSlice";
import { categoryActions } from "../store/categorySlice";
const Header = () => {

    const bag = useSelector((store)=>store.bag);
    const wishlist = useSelector((store)=>store.wishlist);
    const orders = useSelector((store)=>store.orders);
    const selectedCategory = useSelector((store)=>store.category.selected);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(searchActions.setSearchQuery(e.target.value));
        dispatch(categoryActions.setCategory('All'));
    };

    const handleCategoryClick = (category) => {
        dispatch(categoryActions.setCategory(category));
        dispatch(searchActions.clearSearch());
    };
    return (
        <>
         <header>
        <div className="logo_container">
            <Link to="/" onClick={() => {dispatch(categoryActions.setCategory('All')); dispatch(searchActions.clearSearch());}}>
            <img className="myntra_home img-fluid" src="images/myntra_logo.webp" alt="Myntra Home" style={{maxHeight: '45px', objectFit: 'contain'}}/>
            </Link>
        </div>
        <nav className="nav_bar">
            <Link to="/" onClick={() => handleCategoryClick('Men')} className={selectedCategory === 'Men' ? 'active' : ''}>Men</Link>
            <Link to="/" onClick={() => handleCategoryClick('Women')} className={selectedCategory === 'Women' ? 'active' : ''}>Women</Link>
            <Link to="/" onClick={() => handleCategoryClick('Kids')} className={selectedCategory === 'Kids' ? 'active' : ''}>Kids</Link>
            <Link to="/" onClick={() => handleCategoryClick('Home & Living')} className={selectedCategory === 'Home & Living' ? 'active' : ''}>Home & Living</Link>
            <Link to="/" onClick={() => handleCategoryClick('Beauty')} className={selectedCategory === 'Beauty' ? 'active' : ''}>Beauty</Link>
            <Link to="/" onClick={() => handleCategoryClick('Studio')} className={selectedCategory === 'Studio' ? 'active' : ''}>Studio <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more" onChange={handleSearch}/>
        </div>
        <div className="action_bar">
            <Link className="action_container" to="/profile">
                <CgProfile />
                <span className="action_name">Profile</span>
            </Link>

            <Link className="action_container" to="/orders">
                <FaClipboardList />
                <span className="action_name">Orders</span>
                {orders.length > 0 && <span className="bag-item-count">{orders.length}</span>}
            </Link>

            <Link className="action_container" to="/wishlist">
                <FaFaceGrinHearts />
                <span className="action_name">Wishlist</span>
                <span className="bag-item-count">{wishlist.length}</span>
            </Link>

            <Link className="action_container" to="/bag">
                <FaBagShopping />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
            </Link>
        </div>
    </header>
        </>
    )
}
export default Header;