import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Wishlist = () => {
    const wishlistIds = useSelector((store) => store.wishlist);
    const items = useSelector((store) => store.items);
    const wishlistItems = items.filter(item => wishlistIds.includes(item.id));

    return (
        <main>
            <div className="items-container">
                {wishlistItems.length === 0 ? (
                    <div style={{textAlign: 'center', padding: '50px'}}>
                        <h2>Your Wishlist is Empty</h2>
                        <p>Add items you like to your wishlist</p>
                    </div>
                ) : (
                    wishlistItems.map(item => <HomeItem key={item.id} item={item} />)
                )}
            </div>
        </main>
    );
};

export default Wishlist;
