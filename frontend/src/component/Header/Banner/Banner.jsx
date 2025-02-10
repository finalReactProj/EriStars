import Camels from "../../../../public/Camels.jpg";

const Banner = () => {
  return (
    <section className="block  w-full h-[300px] relative overflow-hidden xl:block  md:block  sm:hidden">
      <img
        src={Camels}
        alt="Banner Image"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default Banner;
