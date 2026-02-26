import bannerImg from "../assets/images/banner-reseñas.png";
import catImg from "../assets/images/gato-reseñas.png";
import dogImg from "../assets/images/perro-reseñas.png";

const stories = [
  {
    id: 1,
    img: catImg,
    text: "¡Recuperé a Max, gracias!",
    author: "Ana S.",
  },
  {
    id: 2,
    img: dogImg,
    text: "Estoy tranquilo las 24hrs",
    author: "Carlos G.",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={bannerImg}
              alt="Banner reseñas"
              className="w-full max-w-[560px] rounded-2xl object-cover"
              draggable="false"
            />
          </div>

          {/* Right content */}
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black text-center lg:text-center mb-10">
              Historias de éxito
            </h2>

            <div className="space-y-8">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="bg-[#F2F2F2] rounded-2xl p-6 sm:p-8 flex items-center gap-6"
                >
                  {/* Avatar */}
                  <div className="shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[4px] border-[#22687B] overflow-hidden">
                      <img
                        src={story.img}
                        alt={story.author}
                        className="w-full h-full object-cover"
                        draggable="false"
                      />
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <p className="text-[#22687B] text-4xl leading-none mb-2 select-none">
                      “
                    </p>

                    <p className="text-black text-2xl sm:text-3xl font-semibold leading-tight">
                      {story.text}{" "}
                      <span className="text-[#22687B] font-medium">
                        – {story.author}
                      </span>
                    </p>

                    <p className="text-[#22687B] text-4xl leading-none mt-2 select-none text-right">
                      ”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}