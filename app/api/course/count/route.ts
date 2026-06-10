import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const token = request.headers.get("authorization");

  if (!token) {
    return NextResponse.json(
      {
        message: "Token is required",
      },
      {
        status: 500, // use 401 if it's an authentication error
      },
    );
  }

  return NextResponse.json(
    {
      message: "Success",
      data: {
        course_followed: 10,
        course_active: 20,
        course_completed: 30,
      },
    },
    {
      status: 200,
    },
  );
}
