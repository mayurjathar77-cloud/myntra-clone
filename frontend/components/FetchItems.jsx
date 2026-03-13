import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemsActions } from "../store/itemsSlice";

const FetchItems = () =>{
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if(fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        // Use deployed API URL or fallback to localhost for development
        const API_BASE_URL = window.location.origin + '/api';

        dispatch(fetchStatusActions.markFetchingStarted());
        setTimeout (()=>{
        fetch(`${API_BASE_URL}/items`,{signal})
        .then((res)=> res.json())
        .then((data) =>{
            console.log("Data received:", data);
            dispatch(fetchStatusActions.markFetchDone());
            dispatch(fetchStatusActions.markFetchingFinished());
            dispatch(itemsActions.addInitialItems(data.items));
        })
        .catch((error) => {
            console.error("Fetch error:", error);
            dispatch(fetchStatusActions.markFetchingFinished());
        });
      },400);
        return () => {
            controller.abort();
        };
    },[fetchStatus.fetchDone, dispatch]);


    return null;
}

export default FetchItems;