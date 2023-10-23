import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialVauleRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValueLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("min-width:600px");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const handleFormSubmit = async (values, onSubmitProps) => {};

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValueLogin : initialVauleRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": {
                gridColumn: isNonMobile ? undefined : "span 4",
              },
            }}
          >
            {isRegister && (
              <>
                <TextField
                  label="First Name"
                  onBlue={handleBlur}
                  onChange={handleChange}
                  values={values.firstName}
                  name="firstName"
                  errors={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    gridCoulumn: "span 2",
                  }}
                />
                <TextField
                  label="Last Name"
                  onBlue={handleBlur}
                  onChange={handleChange}
                  values={values.lastName}
                  name="lastName"
                  errors={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    gridCoulumn: "span 2",
                  }}
                />
                <TextField
                  label="Location"
                  onBlue={handleBlur}
                  onChange={handleChange}
                  values={values.location}
                  name="location"
                  errors={Boolean(touched.location) && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                  sx={{
                    gridCoulumn: "span 4",
                  }}
                />
                <TextField
                  label="Occupation"
                  onBlue={handleBlur}
                  onChange={handleChange}
                  values={values.occupation}
                  name="occupation"
                  errors={
                    Boolean(touched.occupation) && Boolean(errors.occupation)
                  }
                  helperText={touched.occupation && errors.occupation}
                  sx={{
                    gridCoulumn: "span 4",
                  }}
                />
                <Box
                  gridColumn=" span 4"
                  border={`1px solid ${palette.neutral.medium}`}
                  borderRadius="5px"
                  p="1rem"
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) => {
                      setFieldValue("picture", acceptedFiles([0]));
                    }}
                  >
                    {({ getRootProps, getInputProps }) => {
                      <Box
                        {...getRootProps}
                        border={`2px dashed ${palette.primary.main}`}
                        p="1rem"
                        sx={{
                          "&:hover": { cursor: "pointer" },
                        }}
                      >
                        {/* add input tag  3:14:40*/}

                        
                      </Box>;
                    }}
                  </Dropzone>
                </Box>
              </>
            )}
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
