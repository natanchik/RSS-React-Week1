export interface Card {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: [];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: Card[];
}

export type HomeState = {
  search: string;
  cards: Card[] | [];
};
