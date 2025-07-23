export interface Post {
	id: number;
	title: string;
	slug: string;
	content: string;
	createdAt: Date;
	category: Category;
	tag: Tag;
}

export interface Category {
	id: string;
	name: string;
	postCount: number;
}

export interface Tag {
	id: string;
	name: string;
	postCount: number;
}

export interface Paginated<T> {
  content: T[];
  first: boolean;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  empty: boolean;
}
