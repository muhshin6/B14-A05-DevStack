import img from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="lg:flex lg:justify-between items-center lg:items-center container mx-auto px-8 pt-24 gap-28">
      <div className="flex flex-col lg:items-start items-center gap-5 max-w-lg text-gray-600">
        <h1 className="text-5xl font-bold text-black lg:text-start text-center">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className=" lg:text-start text-center">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4 ">
          <button className="bg-linear-to-r from-orange-500 to-[#d83b89] px-5 py-2 rounded-md">
            Explore Technologies
          </button>
          <button className="border border-gray-300 rounded-md px-10 py-2">
            Learn More
          </button>
        </div>
      </div>
      <img src={img} alt="Development Stack" />
    </section>
  );
};

export default Banner;
