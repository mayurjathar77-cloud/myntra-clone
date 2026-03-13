import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import profileSlice from "./profileSlice";
import wishlistSlice from "./wishlistSlice";
import searchSlice from "./searchSlice";
import categorySlice from "./categorySlice";
import ordersSlice from "./ordersSlice";

const myntraStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag:bagSlice.reducer,
        profile: profileSlice.reducer,
        wishlist: wishlistSlice.reducer,
        search: searchSlice.reducer,
        category: categorySlice.reducer,
        orders: ordersSlice.reducer,

    }
});
export default myntraStore;