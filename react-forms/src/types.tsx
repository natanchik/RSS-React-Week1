export type User = {
  name: string;
  age: number;
  email: string;
  gender: string[];
  acceptTC: boolean | undefined;
  country: 'USA' | 'Canada' | 'France';
};
