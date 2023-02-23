export type News = {
  id?: number;
  title: string;
  description: string;
  author: string;
  countView?: number;
  cover?: string;
  comments?: any[];
};

export type AllNews = Record<string, News>;

export type NewsEdit = Partial<Omit<News, 'id'>>;
