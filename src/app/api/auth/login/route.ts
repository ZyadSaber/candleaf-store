import { type NextRequest } from "next/server";
import { login } from "@/lib/auth";
import { successMessage } from "@/lib/apiResponse";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    await login(body);

    return successMessage();
  } catch {
    return { status: 400, body: { error: "Invalid JSON" } };
  }
}
