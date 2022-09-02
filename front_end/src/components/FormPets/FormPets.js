import React from 'react';
 import { Formik } from 'formik';
 
 const FormPets = () => (
   <div>
     <h1>Get Your Quote</h1>
     <Formik
       initialValues={
        { firstName: '',
          surname: '',
          address: '',
          postcode: '',
          email: '',
          petname: '',
          pettype: '',
          petage: '',
          petgender: '',
          petbreed: '',
          numberofpets: ''
        }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <form onSubmit={handleSubmit}>
           <input
             type="firstName"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
           />
           {errors.firstName && touched.firstName && errors.firstName}
            <input
             type="surname"
             name="surname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.surname}
           />
           {errors.surname && touched.surname && errors.surname}
           <input
             type="address"
             name="address"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.address}
           />
           {errors.address && touched.address && errors.address}
           <input
             type="postcode"
             name="postcode"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.postcode}
           />
           {errors.postcode && touched.postcode && errors.postcode}
               <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
          {errors.email && touched.email && errors.email}
            <input
             type="petname"
             name="petname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.petname}
           />
           {errors.petname && touched.petname && errors.petname}
           <input
             type="petage"
             name="petage"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );
 
 export default FormPets;