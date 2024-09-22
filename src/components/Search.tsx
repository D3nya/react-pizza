import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import _ from "lodash";

import closeSvg from "../assets/img/close.svg";
import searchSvg from "../assets/img/search.svg";

import Input from "./ui/Input";

import { useAppDispatch } from "../hooks/useRedux";

import { setPage, setSearch } from "../store/filter/filterSlice";

interface SearchProps {
  className?: string;
}

const Search: React.FC<SearchProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");

  // Функция для обновления поля поиска в Redux
  const updateSearch = useCallback(
    (value: string) => {
      dispatch(setSearch(value));
      dispatch(setPage(1));
    },
    [dispatch]
  );

  // Создаем debounced функцию с помощью useMemo
  const debouncedUpdateSearch = useMemo(() => {
    return _.debounce(updateSearch, 500); // Задержка в 500 миллисекунд
  }, [updateSearch]);

  // Очистка debounce при размонтировании компонента
  useEffect(() => {
    return () => {
      debouncedUpdateSearch.cancel();
    };
  }, [debouncedUpdateSearch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInput(newValue);
    debouncedUpdateSearch(newValue);
  };

  const onClickClear = () => {
    setInput("");
    updateSearch("");
    inputRef.current?.focus();
  };

  return (
    <div className={`${className} search`}>
      <img src={searchSvg} alt="search" className="search__img" />
      <Input
        value={input}
        onChange={onChange}
        inputRef={inputRef}
        className={`search__input ${input && "search__input-with-value"}`}
        placeholder="Поиск пиццы..."
      />
      {input && (
        <img
          src={closeSvg}
          alt="close"
          className="search__close"
          onClick={onClickClear}
        />
      )}
    </div>
  );
};

export default Search;
