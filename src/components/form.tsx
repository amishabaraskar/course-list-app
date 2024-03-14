import * as Yup from "yup";
import { Formik } from "formik";
import { enquiry } from "../model/courses/api";

const  formSchema= Yup.object().shape({
    name: Yup.string().required(),
  email: Yup.string().email().required(),
  mobileno: Yup.string().required().min(10, "Enter correct mobile no"),
});

const Form = ({closeModal}) => {
  return (
    <Formik
      validationSchema={formSchema}
      onSubmit={async (values) => {
        await enquiry(values)

        closeModal();
        console.log(id);
      }}
      initialValues={{
        name:"",
        email: "",
        mobileno: "",
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, errors }) => {
        return (
          <div className="bg-gray-300 p-10 w-96 rounded-lg">
            <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
                
                <label className="block text-lg font-medium">Name</label>
                <input
                  type="text"
                  className="bg-gray-700 text-white rounded px-6 py-3 w-full"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.name && (
                  <span className="text-red-600">{errors?.name}</span>
                )}
              </div>

              <div className="mb-4">
                
                <label className="block text-lg font-medium">Name</label>
                <input
                  type="email"
                  className="bg-gray-700 text-white rounded px-6 py-3 w-full"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.email && (
                  <span className="text-red-600">{errors?.email}</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium">Mobile no</label>
                <input
                  type="string"
                  className="bg-gray-700 text-white rounded px-6 py-3 w-full"
                  placeholder="Mobile no"
                  name="mobileno"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.mobileno && (
                  <span className="text-red-600">{errors?.mobileno}</span>
                )}
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-12 py-4 rounded hover:bg-green-400 w-full"
              >
                Login
              </button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Form;
