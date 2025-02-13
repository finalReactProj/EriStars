import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // Feather Icons

const ContactForm = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="flex flex-col sm:flex-col sm:my-3 sm:mx-1 md:my-3 md:mx-1 md:flex-col lg:flex-row xl:flex-row   p-8 rounded-xl shadow-md w-[800px]">
        {/* Contact Information */}
        <div className="w-full rounded-lg p-2 bg-Heather-400 font-bold Heather sm:w-full md:w-full lg:w-[300px] xl:w-[300px]">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Information:
          </h3>
          <ul className="flex flex-row xl:flex-col gap-y-8 xl:gap-y-8 lg:flex-col lg:gap-y-8 sm:flex-row sm:items-baseline sm:gap-x-6">
            <li className="flex items-center text-gray-700">
              <FiPhone className="mr-3 text-blue-500" /> +291 7123456
            </li>
            <li className="flex items-center text-gray-700">
              <FiMail className="mr-3 text-green-500" /> admin@eristars.com
            </li>
            <li className="flex items-start text-gray-700">
              <FiMapPin className="mr-3 text-red-500" />
              <div>
                115 Harnet Avenue
                <br />
                Asmara, Eritrea
              </div>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="w-full bg-gray-100 border-l pl-2 xl:pl-2 lg:pl-2 md:border-0 sm:border-0 border-green-500 sm:w-full md:w-full lg:w-[500px] xl:w-[500px] mt-6 lg:mt-0">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block font-semibold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="phone-number"
                className="block font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg resize-vertical"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-lightPink-400 font-semibold text-white py-3 px-6 rounded-lg hover:bg-lightPink-700 active:bg-lightPink-900 transition-colors text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
