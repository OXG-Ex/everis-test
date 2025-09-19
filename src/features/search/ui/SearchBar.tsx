import {useState, type FC} from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar: FC<SearchBarProps> = ({onSearch}) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Поиск по названию, описанию, производителю"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => onSearch(value)}>Найти</button>
    </div>
  );
};
