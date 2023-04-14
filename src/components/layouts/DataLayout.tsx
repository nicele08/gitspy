import DataLoader from '../shared/skeleton/DataLoader';

interface IDataLayoutProps {
  isLoading: boolean;
  isError?: any;
  children: React.ReactNode;
  loader?: JSX.Element;
}

const DataLayout = ({
  isLoading = false,
  isError = null,
  loader = <DataLoader count={6} />,
  children,
}: IDataLayoutProps) => {
  const onReloadPage = () => {
    window.location.reload();
  };
  if (isLoading) {
    return <div className="flex flex-col">{loader}</div>;
  }
  if (isError) {
    const error = isError.response?.data || isError;
    return (
      <div className="flex flex-col p-4 w-2/3 md:1/2 lg:w-1/3 mx-auto">
        <p className="p-3 bg-red-500 text-white rounded-lg text-center justify-center items-center flex flex-wrap">
          {error?.message || error?.error || 'Something went wrong'}{' '}
          <button
            type="button"
            onClick={onReloadPage}
            className="font-semibold p-2 hover:text-gray-200"
          >
            Reload page
          </button>
        </p>
      </div>
    );
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default DataLayout;
