import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import * as Yup from "yup";
import "./Reg.css";
import { useFormik } from "formik";

// Layout
function Reg({ onTimeout }) {
  const [item, setItem] = useState("");
  const [onTrue, setOnTrue] = useState(true);
  const [twoTrue, setTwoTrue] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/users/1")
      .then((res) => res.json())
      .then((result) => setItem(result));
  }, [onTrue]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(3, "Must be 3 characters")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      if (item.email === values.email && item.password === values.password) {
        setTwoTrue(true);
        setTimeout(() => {
          console.log("test");
          onTimeout(false);
        }, 3000);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="form">
      <FloatingLabel controlId="floatingInput" className="mb-3">
        Email
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </FloatingLabel>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <FloatingLabel controlId="floatingInput" className="mb-3">
        Password
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </FloatingLabel>
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      {twoTrue ? <div>Ви пройшли регістрацію.</div> : null}

      <Button
        type="submit"
        onClick={() => {
          setOnTrue((a) => !a);
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default Reg;
