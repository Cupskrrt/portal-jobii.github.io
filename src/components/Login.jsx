import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Axios from "axios";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = async (data) => {
    const response = await Axios.post("http://localhost:6900/auth/login", data);
    console.log(response.data);
  };

  return (
    <form noValidate onSubmit={() => handleSubmit(loginHandler)}>
      <Controller
        name="email"
        control={control}
        rules={{ required: "true" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            error={!!errors.email}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: "true" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            error={!!errors.password}
          />
        )}
      />
      <Button variant="contained" onClick={handleSubmit(loginHandler)}>
        Login
      </Button>
    </form>
  );
};

export default Login;
