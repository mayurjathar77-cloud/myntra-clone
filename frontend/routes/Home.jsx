import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
const Home = () => {
   const items = useSelector(store => store.items);
   const searchQuery = useSelector(store => store.search.query);
   const selectedCategory = useSelector(store => store.category.selected);
   
   const filteredItems = items.filter(item => {
       const matchesSearch = !searchQuery || 
           item.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.category.toLowerCase().includes(searchQuery.toLowerCase());
       
       const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
       
       return matchesSearch && matchesCategory;
   });

    return  <main>
        <div className="items-container">
          {filteredItems.length === 0 ? (
              <div style={{textAlign: 'center', padding: '50px', width: '100%'}}>
                  <h2>No items found</h2>
                  <p>Try searching with different keywords or select another category</p>
              </div>
          ) : (
              filteredItems.map(item => <HomeItem key={item.id} item={item}/>)
          )}
        </div>
    </main>
}
export default Home;