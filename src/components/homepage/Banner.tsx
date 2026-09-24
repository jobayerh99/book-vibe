import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-6 md:p-10 lg:p-14 shadow-sm">
          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Discover Your Next Favorite Book
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Books to <span className="text-emerald-600">freshen up</span>
              <br />
              your bookshelf
            </h1>

            <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Explore a collection of inspiring stories, timeless classics, and
              exciting new reads. Find something special for your bookshelf
              today.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn border-0 bg-emerald-600 px-6 text-white hover:bg-emerald-700">
                Explore Books
              </button>

              <button className="btn btn-outline border-slate-300 px-6 text-slate-700 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white">
                View The Task
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <Image
                src={bannerImg}
                alt="A collection of books"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
