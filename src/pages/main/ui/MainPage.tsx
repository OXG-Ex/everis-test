import {useUnit} from "effector-react";
import {$limit, limitChanged} from "../../../entities/product";
import {Pagination, SearchBar} from "../../../features";
import {ProductList} from "../../../widgets";

export function MainPage() {
  const limit = useUnit($limit);

  return (
    <div className="main-page">
      <SearchBar />
      <input
        type="number"
        min={1}
        max={100}
        value={limit}
        onChange={(e) => limitChanged(Number(e.target.value))}
      />
      <ProductList />
      <Pagination />
    </div>
  );
}
