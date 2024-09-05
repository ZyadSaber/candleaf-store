import { RecordWithAnyData } from "@/types";
import { login } from "@/lib/auth";

export const initialValues = {
  user_name: "",
  password: "",
};

export const validate = ({ user_name, password }: RecordWithAnyData) => {
  let dd: any = {};

  user_name.trim() === "" && (dd.user_name = "Username is required");
  password.trim() === "" && (dd.password = "Password is required");
  return dd;
};
