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
          <label htmlFor="firstName">First Name</label>
           <input
             type="firstName"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
           />
           {errors.firstName && touched.firstName && errors.firstName}
           <label htmlFor="surname">Surname</label>
            <input
             type="surname"
             name="surname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.surname}
           />
           {errors.surname && touched.surname && errors.surname}
           <label htmlFor="address">Address</label>
           <input
             type="address"
             name="address"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.address}
           />
           {errors.address && touched.address && errors.address}
           <label htmlFor="postcode">Postcode</label>
           <input
             type="postcode"
             name="postcode"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.postcode}
           />
           {errors.postcode && touched.postcode && errors.postcode}
           <label htmlFor="email">Email</label>
          <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
          {errors.email && touched.email && errors.email}
          <label htmlFor="petname">Pet name</label>
            <input
             type="petname"
             name="petname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.petname}
           />
           {errors.petname && touched.petname && errors.petname}
           <label htmlFor="petage">Pet age</label>
           <input
             type="petage"
             name="petage"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.petage}
           />
           {errors.petage && touched.petage && errors.petage}
           <label htmlFor="pettype">Pet type</label>
           <input
             type="pettype"
             name="pettype"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.pettype}
           />
           {errors.pettype && touched.pettype && errors.pettype}
           <label htmlFor="petbreed">Pet breed</label>
           <input
             type="petbreed"
             name="petbreed"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.petbreed}
           />
           {errors.petbreed && touched.petbreed && errors.petbreed}
           <label htmlFor="numberofpets">Number of pets to insure</label>
           <input
             type="numberofpets"
             name="numberofpets"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.numberofpets}
           />
           {errors.numberofpets && touched.numberofpets && errors.numberofpets}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );
 
 export default FormPets;