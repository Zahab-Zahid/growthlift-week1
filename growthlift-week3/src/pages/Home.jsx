function Home() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-6">
        Welcome to GrowthLift
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-400 transition-colors">

          <h2 className="text-xl font-bold mb-2">
            React
          </h2>

          <p>
            Building reusable components.
          </p>

        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-400 transition-colors">

          <h2 className="text-xl font-bold mb-2">
            Tailwind
          </h2>

          <p>
            Styling using utility classes.
          </p>

        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-400 transition-colors">

          <h2 className="text-xl font-bold mb-2">
            Routing
          </h2>

          <p>
            Navigate without refreshing.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;