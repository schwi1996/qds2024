import Image from "next/image";

const Home = () => {
  return (
    <section className="relative flex items-center justify-center">
      
      <div className="p-8 bg-white rounded-md text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to Our Site
        </h1>

        <div>
          Your main content text goes here. Describe what your site or company
          does, and what visitors can expect to find or do here.
        </div>
        
      </div>

    </section>
  );
};

export default Home;