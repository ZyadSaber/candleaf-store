import { NextResponse } from "next/server";
import { RecordWithAnyData } from "@/types";

export const errorMessage = (message?: string) => {
  return NextResponse.json(
    { status: "error", error: message },
    { status: 400 }
  );
};

export const successMessage = (record?: RecordWithAnyData) => {
  return NextResponse.json({ status: "success", ...record }, { status: 200 });
};
