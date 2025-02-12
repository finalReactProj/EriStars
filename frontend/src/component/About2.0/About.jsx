const About = () => {
  return (
    <div className=" mx-auto p-8 flex flex-col bg-gray-100">
      <div className="container bg-gray-50 shadow-sm p-8">
        <div className="flex md:relative flex-col lg:flex-row lg:items-center lg:gap-8">
          {/* Image Section */}
          <div className="flex lg:block xl:block justify-center lg:w-1/2 sm:hidden">
            <img
              src=""
              alt="Yonas"
              className="rounded-lg shadow-lg w-1/2 max-w-sm lg:w-full"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 ">
            <h3 id="myHeader" className="text-3xl font-bold mb-6">
              Who We Are
            </h3>
            <p className="mb-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consequuntur, sunt optio beatae animi debitis, officia mollitia
              dolorem eum ea impedit, vitae quas illum tempore. Eum veritatis,
              corrupti.
            </p>
            <p className="mb-4 text-gray-700">
              Ducimus provident asperiores deleniti praesentium quis eos
              corporis adipisci laboriosam earum quia doloremque, eius ipsa
              quidem. Quod possimus accusamus nisi in consequatur cumque tempore
              harum porro.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem
              fugiat error fuga nobis architecto, modi dolorem? Aut quod maxime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
