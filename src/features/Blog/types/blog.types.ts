export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string | Author;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
}

export interface BlogState {
  posts: BlogPost[];
  selectedPost: BlogPost | null;
  loading: boolean;
  error: string | null;
}

export interface Category {
  id: string;
  name: string;
}
