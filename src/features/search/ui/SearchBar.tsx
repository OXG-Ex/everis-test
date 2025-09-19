import {useState, type FC} from "react";
import {searchChanged} from "../../../entities/product";

import "../styles/search-bar.scss";

export const SearchBar: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [limitValue, setLimitValue] = useState(10);

  const onSearch = () => {
    searchChanged({limit: limitValue, searchText: searchValue});
  };

  //todo: usecallback
  return (
    <>
      <div className="search-fields">
        <div className="search-field">
          <label className="search-label" htmlFor="searchText">
            Поиск
          </label>
          <input
            id="searchText"
            type="text"
            placeholder="Введите строку поиска"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
          />
        </div>
        <div className="search-field" style={{maxWidth: 80}}>
          <label className="search-label" htmlFor="limitNumber">
            Кол-во
          </label>
          <input
            id="limitNumber"
            type="number"
            min={1}
            max={100}
            value={limitValue}
            onChange={(e) => setLimitValue(Number(e.target.value))}
          />
        </div>
      </div>
      <button className="button" onClick={onSearch}>
        Поиск
      </button>
    </>
  );
};
