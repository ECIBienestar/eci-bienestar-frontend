import { useEffect, useState } from "react";

type CarroselItem = {
  type: "image" | "video";
  title: string;
  duration: number;
  url: string;
};

type CarroselProps = {
  items: CarroselItem[];
};

const FADE_DURATION = 500;

const Carrosel = ({ items }: CarroselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!items.length) return;

    const showMs = items[currentIndex].duration * 1000;
    const fadeOutTimer = setTimeout(() => {
      setVisible(false);
    }, showMs);

    const changeTimer = setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % items.length);
      setVisible(true);
    }, showMs + FADE_DURATION);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(changeTimer);
    };
  }, [currentIndex, items]);

  const current = items[currentIndex];

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-black">

      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-[${FADE_DURATION}ms] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {current.type === "image" ? (
          <img
            src={current.url}
            alt={current.title}
            className="w-full h-full object-contain"
          />
        ) : (
          <video
            src={current.url}
            autoPlay
            muted
            loop
            className="w-full h-full object-contain"
          />
        )}
      </div>

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
        <div className="text-left">
          <h2 className="text-lg font-semibold">{current.title}</h2>
        </div>
        <div className="flex justify-center mt-2">
          {items.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 mx-1 rounded-full transition-opacity duration-300 ${
                idx === currentIndex ? "opacity-100 bg-white" : "opacity-40 bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrosel;
