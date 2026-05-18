export type Recipe = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: string;
  ingredients: string[];
  steps: string[];
  featured?: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  details: string[];
  isNew?: boolean;
};
