import {Pagination, SearchBar} from "../../../features";
import {ProductList} from "../../../widgets";

import "../styles/main-page.scss";

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
