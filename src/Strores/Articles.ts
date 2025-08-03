import { create } from 'zustand';

export interface ArticleDataType {
  _id: string;
  abstract: string;
  byline?: {
    original?: string;
  };
  document_type: string;
  headline: {
    main: string;
    kicker?: string;
    print_headline?: string;
  };
  keywords?: {
    name: string;
    value: string;
    rank: number;
  }[];
  multimedia?: {
    caption?: string;
    credit?: string;
    default?: {
      url: string;
      height: number;
      width: number;
    };
    thumbnail?: {
      url: string;
      height: number;
      width: number;
    };
  };
  news_desk?: string;
  print_page?: string;
  print_section?: string;
  pub_date: string;
  section_name?: string;
  snippet?: string;
  source?: string;
  subsection_name?: string;
  type_of_material?: string;
  uri?: string;
  web_url: string;
  word_count?: number;
}


interface ArticleStore {
  articles: ArticleDataType[];
  setArticles: (articles: ArticleDataType[]) => void;
}

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
}));