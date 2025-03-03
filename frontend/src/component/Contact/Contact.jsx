import axios from "axios";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // Feather Icons
import { useForm } from "react-hook-form";




const Contact = () => {
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
  const sendmessage = (data) => {
    console.log(data);
    axios.post("http://localhost:3001/api/message", { data })
      .then(result => console.log(result.data.message))
    .catch(error=>console.log(error.response.data.message))
 }

  return (
    <>
      <h2 className="text-center">How to reach us</h2>
      <p className=" w-[900px] mx-auto">
        "We’d love to hear from you! Whether you have questions, feedback, or
        need assistance, feel free to reach out. You can contact us via phone,
        email, or by filling out the form below. Our team is here to help and
        will get back to you as soon as possible. We look forward to connecting
        with you!" Let me know if you need any tweaks!
      </p>

      <div className=" flex justify-center items-center min-h-screen ">
        <div className="flex flex-col justify-between sm:flex-col sm:my-3 sm:mx-1 md:my-3 bg-blue-100 md:mx-1 md:flex-col lg:flex-row xl:flex-row   p-1 rounded-xl shadow-md w-[900px]">
          <div className="w-full rounded-lg p-2 bg-Heather-400 font-bold Heather sm:w-full md:w-full lg:w-[300px] xl:w-[300px]">
            <h3 className="text-2xl font-semibold text-gray-800">
              Contact Information:
            </h3>
            <ul className="flex flex-column xl:flex-col xl:gap-y-16 gap-y-8  sm:gap-y-11 lg:flex-col lg:gap-y-10 sm:flex-row sm:items-baseline sm:gap-x-6">
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
          <div className="bg-gray-100 border-l pl-2 xl:pl-2 lg:p-6 p-3 md:border-0 sm:border-0 border-green-500 sm:w-full md:w-full lg:w-[500px] xl:w-[500px] lg:mt-0">
            <form className="" onSubmit={handleSubmit(sendmessage)}>
              <div className="grid md:grid-cols-2 gap-2 ">
                <div>
                  <label htmlFor="first-name" className="block font-semibold ">
                    First Name
                  </label>
                  <input
                  autoFocus
                    {...register("firstName")}
                    type="text"
                    className="w-full outline-0  border-b-2 border-gray-400 mb-4"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block font-semibold ">
                    Last Name
                  </label>
                  <input
                    {...register("lastName")}
                    type="text"
                    className="w-full outline-0 border-b-2 border-gray-400 mb-4"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full  outline-0  border-b-2 border-gray-400 mb-4"
                />
              </div>
              <div>
                <label htmlFor="phone-number" className="block font-semibold">
                  Phone Number
                </label>

                <input
                  {...register("phone")}
                  type="number"
                  className="w-full  outline-0  border-b-2 border-gray-400 mb-4"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows="5"
                  className="w-full outline-0  border-b-2 border-gray-400 resize-vertical"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" font-semibold bg-blue-100   py-3 px-6 rounded hover:bg-lightPink-700 active:bg-lightPink-900 transition-colors text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
