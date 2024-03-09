import Image from "next/image";

const Home = () => {
  return (
    <section className="relative">
      {/* Top-left images or icons (use absolute positioning) */}
      <div className="absolute left-0 top-0 z-10">
        {/* Replace src with your image path */}
        <Image
          src="/path-to-your-top-left-image.jpg"
          alt="Image description"
          width={100}
          height={100}
        />
        {/* Repeat for other images or icons */}
      </div>

      {/* Container for center-aligned content */}
      <div className="container mx-auto py-4 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to Our Site
        </h1>
        {/* Main content goes here */}
        <p className="mt-2">
          Your main content text goes here. Describe what your site or company
          does, and what visitors can expect to find or do here.
        </p>
        {/* Call to action button */}
      </div>
      <br></br>
      {/* Footer (at the bottom of the section) */}

      <footer className="absolute bottom-0 w-full p-4 text-center">
        Footer content goes here.
      </footer>

    </section>
  );
};

export default Home;
