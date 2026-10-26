
import { useSearchParams, Link } from "react-router-dom";
import { BLOG_DATA } from "../utils/helper";

const Blogdetails = () => {
  const [searchParams] = useSearchParams();

  const slug = searchParams.get("heading");
  const role = searchParams.get("role");

  const DATA = BLOG_DATA.find(
    (item) =>
      item.heading.toLowerCase().replaceAll(" ", "_") === slug &&
      item.role.toLowerCase().replaceAll(" ", "_") === role
  );

  if (!DATA) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">
          Blog Not Found!
        </h1>

        <Link to="/" className="mt-5 text-orange underline">
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-off-orange min-h-screen">
      <div className="blog-container max-w-292.5 mx-auto flex flex-col items-center py-30 px-5">

        <Link to="/" className="self-start text-orange mb-6">
          ← Back to Home
        </Link>

        <p className="uppercase text-orange font-medium">
          {DATA.role}
        </p>

        <img
          src={DATA.img}
          alt={DATA.heading}
          className="w-full max-w-250 h-64 md:h-125 object-cover rounded-xl mt-5"
        />

        <h1 className="text-custom-4xl font-semibold text-center max-w-[90%] mx-auto mt-5">
          {DATA.heading}
        </h1>

        <p className="font-normal text-base text-gray text-center mt-5 leading-7">
          {DATA.para}
        </p>

        <button className="font-medium text-xl py-3.25 px-5.75 bg-orange cursor-pointer hover:shadow-[4px_5px_15px_0px_#FF53001A] text-white mt-6.25 rounded-[5px]">
          {DATA.btn}
        </button>

      </div>
    </section>
  );
};

export default Blogdetails;
