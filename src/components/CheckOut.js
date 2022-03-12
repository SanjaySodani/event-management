import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { FoodContext } from "../App";
import {Link} from 'react-router-dom';

function CheckOut() {
  const context = useContext(FoodContext);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      contact: "",
      email: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20, 'Must be 20 characters or less').required("Name is required"),
      address: Yup.string().max(30, 'Must be 30 characters or less').required("Address if required"),
      contact: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Contact is required"),
      email: Yup.string().email("Must be a email").required("Email is required")
    }),
    onSubmit: (values) => {
      context.submitUserDetails(values);
    }
  });

  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-lg-2 justify-content-center">
        <div className="col">
          <h3 className="text-monospace">Enter your details</h3>
          <div className="form-group my-4">
            <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id="name" name="name" type="text" placeholder="Name" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.name && formik.errors.name ? <p className='text-danger'>{formik.errors.name}</p> : null}

            <input value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} id="address" name="address" type="text" placeholder="Address" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.address && formik.errors.address ? <p className='text-danger'>{formik.errors.address}</p> : null}

            <input value={formik.values.contact} onChange={formik.handleChange} onBlur={formik.handleBlur} id="contact" name="contact" type="text" placeholder="Contact" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.contact && formik.errors.contact ? <p className='text-danger'>{formik.errors.contact}</p> : null}

            <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" name="email" type="email" placeholder="Email" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.email && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p> : null}

            <button type="button" className="btn btn-primary btn-lg mt-4" onClick={formik.handleSubmit}>Submit</button>
            {context.user.isNull ? null : 
              <div className='my-2'>
                <Link to='/order-summary' className='btn btn-lg btn-outline-success'>Proceed</Link>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut;