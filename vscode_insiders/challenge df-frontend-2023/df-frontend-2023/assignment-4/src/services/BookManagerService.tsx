import {
  BookResponseStatusType,
  BookResponseType,
  BookStoreType,
  BookType,
  SearchTermType,
} from '../common/Types';

class BookManagerService {
  private storageKey: string;
  private db: Storage | undefined;

  constructor() {
    this.storageKey = 'books';
    if (typeof window !== 'undefined') {
      this.db = localStorage;
    }
  }

  private getBooksFromStorage(): BookType[] {
    if (!this.db) return [];
    const storedBooks = this.db.getItem(this.storageKey);
    return storedBooks ? JSON.parse(storedBooks) : [];
  }

  private saveBooksToStorage(books: BookType[]): void {
    if (this.db) this.db.setItem(this.storageKey, JSON.stringify(books));
  }

  public async getList(condition: SearchTermType): Promise<BookStoreType> {
    try {
      const storedBooks = this.getBooksFromStorage();
      const filteredBooks = storedBooks.filter(
        (book) =>
          book.title?.toLowerCase().includes(condition.term.toLowerCase()),
      );
      const totalBooks = filteredBooks.length;
      const totalPages = Math.ceil(totalBooks / condition.perPage);
      const startIndex = (condition.page - 1) * condition.perPage;
      const endIndex = startIndex + condition.perPage;
      const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
      return {
        page: condition.page,
        perPage: condition.perPage,
        total: totalBooks,
        totalPages,
        data: paginatedBooks,
      };
    } catch (error) {
      console.error('Error fetching book list:', error);
      throw error;
    }
  }

  public async create(book: BookType): Promise<BookResponseType> {
    try {
      if (
        book.title === '' ||
        book.author === '' ||
        book.topic === '' ||
        book.id !== ''
      ) {
        return {
          status: false,
          message: 'Invalid Data',
          data: book,
        };
      }
      const storedBooks = this.getBooksFromStorage();
      const newBook: BookType = {
        ...book,
        createdAt: Date.now(),
        id: Math.floor(Math.random() * Date.now()).toString(16),
      };
      storedBooks.push(newBook);
      this.saveBooksToStorage(storedBooks);
      return {
        status: true,
        message: `Success create book ${newBook.id}`,
        data: newBook,
      };
    } catch (error) {
      return {
        status: false,
        message: error,
        data: book,
      };
    }
  }

  public async delete(book: BookType): Promise<BookResponseStatusType> {
    try {
      const storedBooks = this.getBooksFromStorage();
      const updatedBooks = storedBooks.filter((item) => item.id !== book.id);
      this.saveBooksToStorage(updatedBooks);
      return { status: true, message: `Success Delete book ${book.id}` };
    } catch (error) {
      return { status: false, message: error };
    }
  }

  public async find(id: string): Promise<BookResponseType> {
    try {
      const storedBooks = this.getBooksFromStorage();
      const book = storedBooks.find((item) => item.id === id);
      if (book) {
        return {
          status: false,
          message: 'Book not found',
          data: book,
        };
      }
      return {
        status: true,
        message: 'Success',
        data: undefined,
      };
    } catch (error) {
      return {
        status: false,
        message: 'error',
        data: undefined,
      };
    }
  }

  public async update(book: BookType): Promise<BookResponseType> {
    try {
      if (
        book.title === '' ||
        book.author === '' ||
        book.topic === '' ||
        book.id === ''
      ) {
        return {
          status: false,
          message: 'Invalid Data',
          data: book,
        };
      }
      const storedBooks = this.getBooksFromStorage();
      const existingBookIndex = storedBooks.findIndex(
        (item) => item.id === book.id,
      );
      if (existingBookIndex === -1) {
        return {
          status: false,
          message: 'Book not found',
          data: book,
        };
      }
      const updatedBooks = [...storedBooks];
      updatedBooks[existingBookIndex] = book;
      this.saveBooksToStorage(updatedBooks);
      return {
        status: true,
        message: `Success Updated book ${book.id}`,
        data: book,
      };
    } catch (error) {
      return {
        status: false,
        message: error,
        data: book,
      };
    }
  }
}

const instance = new BookManagerService();
export default instance;
