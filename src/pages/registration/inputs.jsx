import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Skeleton,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import useAuth from "../../auth";
import TextFieldDatePicker from "./date-picker";
import UserSchema, { initialUser } from "./schema/user-schema";

function InputRegistration() {
  const [loading, setLoading] = React.useState(true);
  const auth = useAuth();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const formik = useFormik({
    initialValues: initialUser,

    validationSchema: UserSchema,
    onSubmit: () => {
      setLoading(true);
      auth
        .then(() => {
          console.log("DITO");
        })
        .catch(() => {
          console.log("ERROR");
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });
  return (
    <Box>
      <form id="join-form" autoComplete="off" onSubmit={formik?.handleSubmit}>
        <Box sx={{ height: "70vh" }}>
          {loading ? (
            <Box p={3}>
              <Skeleton width="20vw" height="7vh">
                <Typography>.</Typography>
              </Skeleton>
            </Box>
          ) : (
            <Typography variant="h5" sx={{ padding: 3, fontWeight: 600 }}>
              Information
            </Typography>
          )}
          <Box ml={7} mr={3}>
            <Box sx={{ maxHeight: 200 }}>
              <Grid container spacing={0}>
                <Grid item xs={12} md={6} pt={3}>
                  {loading ? (
                    <Box>
                      <Skeleton width="30vh" height="7vh">
                        <Typography>.</Typography>
                      </Skeleton>
                    </Box>
                  ) : (
                    <TextField
                      id="outlined-basic"
                      label="Firstname"
                      name="firstName"
                      fullWidth
                      disabled={loading}
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBLur}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                      variant="standard"
                      sx={{ pr: 4 }}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={6} pt={3}>
                  {loading ? (
                    <Box>
                      <Skeleton width="30vh" height="7vh">
                        <Typography>.</Typography>
                      </Skeleton>
                    </Box>
                  ) : (
                    <TextField
                      id="outlined-basic"
                      name="lastName"
                      label="Lastname"
                      disabled={loading}
                      value={formik?.values?.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBLur}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                      variant="standard"
                      fullWidth
                      sx={{ pr: 4 }}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={6} pt={3}>
                  {loading ? (
                    <Box>
                      <Skeleton width="30vh" height="7vh">
                        <Typography>.</Typography>
                      </Skeleton>
                    </Box>
                  ) : (
                    <TextField
                      id="outlined-basic"
                      label="Middlename"
                      name="middleName"
                      fullWidth
                      disabled={loading}
                      value={formik.values.middleName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBLur}
                      error={
                        formik.touched.middleName &&
                        Boolean(formik.errors.middleName)
                      }
                      helperText={
                        formik.touched.middleName && formik.errors.middleName
                      }
                      variant="standard"
                      sx={{ pr: 4 }}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={6} pt={3}>
                  {loading ? (
                    <Box>
                      <Skeleton width="30vh" height="7vh">
                        <Typography>.</Typography>
                      </Skeleton>
                    </Box>
                  ) : (
                    <TextField
                      id="outlined-basic"
                      label="Email (Required)"
                      name="email"
                      fullWidth
                      disabled={loading}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBLur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      variant="standard"
                      sx={{ pr: 4 }}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={6} pt={3}>
                  {loading ? (
                    <Box>
                      <Skeleton width="30vh" height="7vh">
                        <Typography>.</Typography>
                      </Skeleton>
                    </Box>
                  ) : (
                    <TextFieldDatePicker
                      name="birthday"
                      disabled={loading}
                      value={formik.values.birthday}
                      onChange={(evt) =>
                        formik?.setFieldValue(
                          "birthday",
                          evt?.toISOString(),
                          true
                        )
                      }
                      maxDate={new Date()}
                      error={
                        formik.touched.birthday &&
                        Boolean(formik.errors.birthday)
                      }
                      helperText={
                        formik.touched.birthday && formik.errors.birthday
                      }
                      variant="standard"
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={6} pt={3}>
                  {loading ? (
                    <Box>
                      <Skeleton width="30vh" height="7vh">
                        <Typography>.</Typography>
                      </Skeleton>
                    </Box>
                  ) : (
                    <TextField
                      id="outlined-basic"
                      label="Suffix"
                      name="suffix"
                      fullWidth
                      disabled={loading}
                      value={formik.values.suffix}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBLur}
                      error={
                        formik.touched.suffix && Boolean(formik.errors.suffix)
                      }
                      helperText={formik.touched.suffix && formik.errors.suffix}
                      variant="standard"
                      sx={{ pr: 4 }}
                    />
                  )}
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ textAlign: "right", marginTop: "190px" }}>
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "right",
                    // marginRight: 1,
                    marginTop: -4,
                  }}
                >
                  <Skeleton width="10vh" height="7vh">
                    <Typography>.</Typography>
                  </Skeleton>
                </Box>
              ) : (
                <Button variant="contained" color="primary" type="submit">
                  Register
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default InputRegistration;
