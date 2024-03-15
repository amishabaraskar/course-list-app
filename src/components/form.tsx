import * as Yup from "yup";
import { Formik } from "formik";
import { enquiry, enquirydoubts } from "../model/courses/api";
import { useSelector } from "react-redux";


const formSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  mobileno: Yup.string().required().length(10, "Enter correct mobile no"),
});

const Form = (props) => {
  const id = useSelector((state) => {
    return state?.id;
  });

  return (
    <Formik
      validationSchema={formSchema}
      onSubmit={async (values, { resetForm }) => {
        if (props?.doubt === true)
          await enquirydoubts(values)
        else
          await enquiry(values, id)

        if (props?.closeModal)
          props.closeModal();
        alert("Thank you for showing interest!!\nWe will get back to you")
        resetForm({ values: '' })
      }}
      initialValues={{
        name: "",
        email: "",
        mobileno: "",
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, errors, values }) => {
        return (
          <div className="mx-auto bg-gray-300 p-10 w-96 rounded-lg ">
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
                  value={values.name}

                />
                {errors?.name && (
                  <span className="text-red-600">{errors?.name}</span>
                )}
              </div>

              <div className="mb-4">

                <label className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  className="bg-gray-700 text-white rounded px-6 py-3 w-full"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}

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
                  value={values.mobileno}

                />
                {errors?.mobileno && (
                  <span className="text-red-600">{errors?.mobileno}</span>
                )}
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-12 py-4 rounded hover:bg-green-400 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Form;
