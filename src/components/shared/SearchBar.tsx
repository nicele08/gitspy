import { useState, FormEvent, ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const SearchBar = ({ onSubmit = (search: string) => {} }) => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const [searchText, setSearchText] = useState(q || '');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setSearchText(value);
    navigate(`${pathname}?q=${value}`);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchText.trim()) return;
    onSubmit(searchText);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-grow items-center justify-center max-w-4xl"
    >
      <label
        htmlFor="search"
        className="w-full flex items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md border-2 border-blue-500 focus-within:border-blue-700 focus-within:ring-1 focus-within:ring-blue-500 focus-within:ring-opacity-50"
      >
        <FiSearch className="text-lg ml-2" />

        <input
          id="search"
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search Repositories..."
          autoComplete="off"
          className="p-2 transition duration-300 ease-in-out w-full bg-transparent focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="hidden md:block transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
