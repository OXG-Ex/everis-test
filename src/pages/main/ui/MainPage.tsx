import {useState} from "react";
import {Pagination} from "../../../features/pagination/ui/Pagination";
import {SearchBar} from "../../../features/search/ui/SearchBar";
import {ProductList} from "../../../widgets/product-list/ui/ProductList";

export const MainPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // TODO: totalPages

  return (
    <div>
      <SearchBar onSearch={setSearch} />
      <input
        type="number"
        min={1}
        max={100}
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <ProductList search={search} page={page} limit={limit} />
      <Pagination page={page} totalPages={10} onPageChange={setPage} />
    </div>
  );
};
