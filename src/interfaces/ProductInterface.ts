/* Interface seggregation: in a regular project i would store all types in a
  types.ts file to make it easier to find and understand the types of a project.
  but for thesake fo this exercise i have split into several interface files */

export interface Product {
  id: number;
  rating: number;
  productName: string;
  price: number;
  category: string;
  picture: string;
}
/* open- closed principle: only adding to existing things and not changing 
  originally available things. */
export interface DetailedProduct extends Product {
  brand: string;
  sizes: string;
  colors: string;
  description: string;
  salesPrice: number;
}
