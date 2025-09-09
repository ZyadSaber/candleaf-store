import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { errorMessage, successMessage } from "@/lib/apiResponse";
import { login } from "@/lib/auth";

export const POST = async (req: Request) => {
  try {
    const { email, password, first_name, last_name } = await req.json();

    const existingUserByEmail = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return errorMessage("Email already in use");
    }

    await prisma.users.create({
      data: {
        first_name,
        last_name,
        email,
        password: await bcrypt.hash(password, 12),
      },
    });

    await login({
      email: email,
      password: password,
    });

    return successMessage();
  } catch (error) {
    return errorMessage(error?.toString());
  }
};
