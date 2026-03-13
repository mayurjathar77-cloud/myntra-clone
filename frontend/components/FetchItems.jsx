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

        dispatch(fetchStatusActions.markFetchingStarted());
        setTimeout (()=>{
        fetch("http://localhost:8081/items",{signal})
        .then((res)=> res.json())
        .then((data) =>{
            console.log("Data received:", data);
            dispatch(fetchStatusActions.markFetchDone());
            dispatch(fetchStatusActions.markFetchingFinished());
            dispatch(itemsActions.addInitialItems(data.items));
        })
        .catch((error) => {
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