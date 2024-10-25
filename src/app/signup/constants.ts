import { RecordWithAnyData } from "@/types";

export const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  rePassword: "",
};

export const validate = ({
  first_name,
  last_name,
  email,
  password,
  rePassword,
}) => {
  let obj: RecordWithAnyData = {};

  first_name.trim() === "" && (obj.first_name = "First Name is required");
  last_name.trim() === "" && (obj.last_name = "Last Name is required");
  email.trim() === "" && (obj.email = "Email is required");
  password.trim() === "" && (obj.password = "Password is required");
  rePassword.trim() === "" && (obj.rePassword = "rePassword is required");
  if (password !== rePassword) {
    obj.password = "Passwords do not match.";
    obj.rePassword = "Passwords do not match.";
  }
  return obj;
};
