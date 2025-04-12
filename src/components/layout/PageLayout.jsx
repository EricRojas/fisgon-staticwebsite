const PageLayout = ({ children }) => {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <div className="mx-full max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    );
  };
  
  export default PageLayout;