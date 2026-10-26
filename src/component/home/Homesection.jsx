import { useNavigate } from "react-router-dom";
import { CARD_DATA } from "../../utils/helper";

const Homesection = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">
            OUR BLOG
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest Articles
          </h1>

          <p className="text-gray-500 mt-3">
            Explore our latest news, ideas and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CARD_DATA.map((blog, index) => (
            <article
              key={index}
              className="bg-white cursor-pointer rounded-2xl overflow-hidden border border-gray-100"
            >
              <img
                src={blog.img}
                alt={blog.heading}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full">
                  {blog.role}
                </span>

                <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-3 leading-snug">
                  {blog.heading}
                </h2>

                <p className="text-sm text-gray-500 leading-6 mb-6">
                  {blog.para}
                </p>

                <button className="text-orange-600 cursor-pointer font-semibold text-sm"onClick={() =>
                    navigate(
                      `/blog?heading=${encodeURIComponent(
                        blog.heading.toLowerCase().replaceAll(" ", "_")
                      )}&role=${encodeURIComponent(
                        blog.role.toLowerCase().replaceAll(" ", "_")
                      )}`
                    )
                  }>
                  {blog.btn} →
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Homesection;
