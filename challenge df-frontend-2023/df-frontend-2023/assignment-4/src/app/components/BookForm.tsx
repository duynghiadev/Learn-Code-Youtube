import { FC } from 'react';
import { BookType } from '../../common/Types';

interface BookProps {
  bookData: BookType;
  onChange: (book: BookType) => void;
  onSubmit: () => void;
  disableEdit: boolean;
}

export const BookForm: FC<BookProps> = ({
  bookData,
  onChange,
  onSubmit,
  disableEdit,
}) => {
  const topics = disableEdit
    ? [bookData.topic]
    : ['Programming', 'Database', 'DepOps', 'FrontEnd', 'BackEnd'];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const updatedBook = {
      ...bookData,
      [type === 'select-one' ? 'topic' : name]: value,
    };
    onChange(updatedBook);
  };

  const clickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="space-y-8">
      <div className="flex flex-col gap-4 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        <label htmlFor="title">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title:
          </p>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Book Title"
            value={bookData.title}
            readOnly={disableEdit}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="author">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Author:
          </p>
          <input
            type="text"
            name="author"
            id="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Book Author"
            value={bookData.author}
            readOnly={disableEdit}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="category">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Topic:
          </p>
          <select
            id="category"
            disabled={disableEdit}
            onChange={handleInputChange}
            value={bookData.topic}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="" hidden>
              Select category
            </option>
            {topics.map((topic) => (
              <option value={topic} key={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
      </div>
      {!disableEdit && (
        <button
          type="submit"
          onClick={clickSubmit}
          className="w-full text-center text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Save
        </button>
      )}
    </form>
  );
};
