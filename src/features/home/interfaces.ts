export interface PostsInterface {
  id: number;
  title: string;
  body: string;
}

export interface PaginationInterface {
  limit: number;
  total: number;
  page: number;
}

export interface Errors {
  title: boolean;
  description: boolean;
}

export interface Fields {
  title: string;
  description: string;
}
