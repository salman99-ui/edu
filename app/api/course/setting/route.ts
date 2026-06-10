import { NextResponse } from "next/server";

export async function PUT(request: Request) {
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

  // wktu untuk delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (Math.random() < 0.4) {
    return NextResponse.json(
      { message: "Gagal merubah settings" },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message: "Success",
    status: 200,
  });
}
