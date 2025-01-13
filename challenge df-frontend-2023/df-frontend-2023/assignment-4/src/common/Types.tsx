interface BookStoreType {
  page: number | 1;
  perPage: number | 5;
  total: number | 0;
  totalPages: number | 0;
  data: BookType[];
}

interface BookType {
  id: string;
  createdAt: number;
  title: string;
  author: string;
  topic: string;
}

interface SearchTermType {
  page: number;
  perPage: number;
  term: string;
}

interface CreateFormStateType {
  isShow: boolean;
  book: BookType | null;
}

interface DeleteFormStateType {
  isShow: boolean;
  book: BookType | null;
}

interface BookResponseType {
  status: boolean;
  message: string;
  data: BookType | undefined;
}

interface BookResponseStatusType {
  status: boolean;
  message: string;
}

interface ParamsType {
  [key: string]: string | string[] | undefined;
}

interface LinkType {
  text: string;
  href: string;
}

interface ToasterType {
  category: string;
  message: string;
}

export type {
  BookStoreType,
  BookType,
  SearchTermType,
  CreateFormStateType,
  DeleteFormStateType,
  BookResponseType,
  BookResponseStatusType,
  ParamsType,
  LinkType,
  ToasterType,
};
