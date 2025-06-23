export interface Post {
	id: number;
	title: string;
	content: string;
	createdAt: Date;
	category: Category;
	tagId: string;
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
