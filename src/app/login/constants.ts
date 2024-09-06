import { RecordWithAnyData } from "@/types";
import { login } from "@/lib/auth";

export const initialValues = {
  email: "",
  password: "",
};

export const validate = ({ email, password }: RecordWithAnyData) => {
  let obj: RecordWithAnyData = {};

  email.trim() === "" && (obj.email = "Username is required");
  password.trim() === "" && (obj.password = "Password is required");
  return obj;
};
