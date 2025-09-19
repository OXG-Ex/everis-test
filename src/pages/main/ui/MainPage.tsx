import {Pagination, SearchBar} from "../../../features";
import {ProductList} from "../../../widgets";

export function MainPage() {
  return (
    <div className="main-page">
      <div className="search-panel">
        <SearchBar />
      </div>

      <ProductList />
      <Pagination />
    </div>
  );
}
