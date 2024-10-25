import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { verify } from "argon2";
import { prisma } from "./prisma";
import { RecordWithAnyData } from "@/types";

const secretKey = process.env.JWTKEY;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(key);
}

export async function decrypt(input: string) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login({ email, password }) {
  const foundUser = await prisma.users.findUnique({
    where: { email },
  });

  const {
    password: userPassword,
    email: userEmail,
    first_name,
    id,
    admin,
  } = foundUser || {};

  const goodPassword = await verify(userPassword || "", password);
  if (!goodPassword) return "Invalid credentials";

  if (goodPassword) {
    const expires = 10 * 24 * 60 * 60 * 1000;
    const session = await encrypt({
      user: {
        email: userEmail,
        first_name,
        user_id: id,
        admin,
      },
      expires,
    });

    // Save the session in a cookie
    cookies().set("session", session, {
      path: "/",
      httpOnly: true,
      maxAge: expires,
    });

    return {
      email,
      first_name,
    };
  }
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
