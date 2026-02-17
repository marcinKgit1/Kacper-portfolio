export interface Photo {
  id: string;
  url: string;
  title: string;
  category: Category;
}

export type Category = "Portrety" | "Eventy" | "Krajobrazy";
