// Pizza

export interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  price: number[];
  category: string[];
  composition: string;
  fresh: boolean;
  hit: boolean;
  rating: number;
}

// Pizza Types and Sizes
export enum pizzaTypes {
  traditional = "Традиционное",
  thiny = "Тонкое",
}

export enum pizzaSizes {
  small = "Маленькая",
  medium = "Средняя",
  big = "Большая",
}

// Async Pizza

export enum FetchStatus {
  Idle = "idle",
  Pending = "pending",
  Succeeded = "succeeded",
  Failed = "failed",
}

export interface PizzaState {
  items: Pizza[];
  total: number;
  status: FetchStatus;
  error: string;
}

export interface fetchAllPizzasParams {
  page: number;
  limit: number;
  category: string;
  sort: string;
  search: string;
}

export interface fetchAllPizzasResponse {
  pizza: Pizza[];
  total: number;
}

export interface fetchPizzaByIdResponse {
  pizza: Pizza[];
  total: number;
}

export interface fetchPizzaByIdParams {
  id: number;
}

// Filter

export interface FilterState {
  page: number;
  limit: number;
  category: string;
  sort: string;
  search: string;
}

// Cart

export interface PizzaCart {
  id: number;
  imageUrl: string;
  title: string;
  type: pizzaTypes;
  size: pizzaSizes;
  price: number;
  fresh: boolean;
  hit: boolean;
  count: number;
}

export interface CartState {
  items: PizzaCart[];
  price: number;
}
