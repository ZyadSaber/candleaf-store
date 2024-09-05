import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
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
  const { payload }: RecordWithAnyData = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const foundUser = await prisma.users.findUnique({
    where: { email },
  });

  const { password: userPassword, email: userEmail } = foundUser || {};

  const goodPassword = await verify(userPassword || "", password);
  if (!goodPassword) return "Invalid credentials";

  if (goodPassword) {
    const expires = 10 * 24 * 60 * 60 * 1000;
    const session = await encrypt({
      user: {
        email: userEmail,
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
      userEmail,
      email,
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

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
