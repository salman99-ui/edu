import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      message: "Success",
      data: {
        course_followed: 0,
        course_active: 0,
        course_completed: 10,
      },
    },
    {
      status: 200,
    },
  );
}
