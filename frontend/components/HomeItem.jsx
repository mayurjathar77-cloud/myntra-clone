import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { wishlistActions } from "../store/wishlistSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const HomeItem = ({item})=>{

    const dispatch = useDispatch();
    const bagItems = useSelector((store)=>store.bag);
    const wishlistItems = useSelector((store)=>store.wishlist);
    const elementFound = bagItems.indexOf(item.id) >= 0;
    const isWishlisted = wishlistItems.indexOf(item.id) >= 0;

    const handleAddToBag = () =>{
        dispatch(bagActions.addtoBagButton(item.id));
    }
    const handleRemove = () =>{
        dispatch(bagActions.removeFromBag(item.id));
    }
    const handleWishlist = () =>{
        if(isWishlisted) {
            dispatch(wishlistActions.removeFromWishlist(item.id));
        } else {
            dispatch(wishlistActions.addToWishlist(item.id));
        }
    }
return (
    <>
    <div className="item-container">
      <img className="item-image img-fluid rounded shadow-sm" src={item.image} alt="item image" style={{objectFit: 'cover', height: '300px'}}/>
      <div className="wishlist-icon" onClick={handleWishlist}>
        {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart />}
      </div>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
    
      { elementFound ? (
            <button type="button" className="btn btn-add-bag  btn-danger" onClick={handleRemove} ><RiDeleteBin6Fill /> Remove</button>
        ) : (
             <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddToBag}
             >
            <IoAddCircleOutline /> Add to Bag</button>

        )}
    </div>
    </>
)
}
export default HomeItem;