import React, { useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaItem, { PizzaItemSkeleton } from "../components/PizzaItem";
import Error from "../components/Error.tsx";
import Pagination from "../components/Pagination.tsx";
import NotFound from "../components/NotFound.tsx";

import { useAppDispatch, useAppSelector } from "../hooks/useRedux.ts";
import { fetchAllPizzas } from "../store/pizza/pizzaAsync.ts";
import { selectPizza } from "../store/pizza/pizzaSelectors.ts";
import { selectFilter } from "../store/filter/filterSelectors.ts";
import { setPage } from "../store/filter/filterSlice.ts";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const pizza = useAppSelector(selectPizza);
  const filter = useAppSelector(selectFilter);

  useEffect(() => {
    dispatch(
      fetchAllPizzas({
        limit: filter.limit,
        page: filter.page,
        category: filter.category,
        sort: filter.sort,
        search: filter.search,
      })
    );
  }, [
    dispatch,
    filter.category,
    filter.limit,
    filter.page,
    filter.search,
    filter.sort,
  ]);

  const isLoading = pizza.status === "pending";
  const isError = pizza.status === "failed";

  const onPageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <main className="home">
      <div className="home__top">
        <Categories className="home__categories" />
        <Sort className="home__sort" />
      </div>

      {isError ? (
        <Error className="home__error" label="пиццы" />
      ) : (
        <>
          {!isLoading && pizza.total === 0 && (
            <NotFound className="home__not-found" label="пиццы" />
          )}
          <div className="home__grid">
            {isLoading
              ? [...new Array(4)].map((_, index) => (
                  <PizzaItemSkeleton key={index} />
                ))
              : pizza.items.map((pizza) => (
                  <PizzaItem
                    className="home__pizza-item"
                    key={pizza.id}
                    pizza={pizza}
                  />
                ))}
          </div>
          <div className="home__bottom">
            {!isLoading && (
              <Pagination
                total={pizza.total}
                limit={filter.limit}
                page={filter.page}
                onPageChange={onPageChange}
              />
            )}
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
