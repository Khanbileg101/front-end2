export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Portfolio</h2>
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <p className="text-gray-700">Portfolio Content</p>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Weather</h2>
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <p className="text-gray-700">Weather Widget</p>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-center">News</h2>
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <p className="text-gray-700">News Feed</p>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Search</h2>
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <p className="text-gray-700">Search Bar</p>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Placeholder</p>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}