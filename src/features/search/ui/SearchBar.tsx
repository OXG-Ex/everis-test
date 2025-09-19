import {useState, type FC} from "react";
import {searchChanged} from "../../../entities/product";

export const SearchBar: FC = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Поиск по названию, описанию, производителю"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => searchChanged(value)}>Найти</button>
    </div>
  );
};
