import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;

  if (email === "admin-ganteng@example.com" && password === "123456") {
    return NextResponse.json(
      {
        message: "Berhasil Login",
        data: {
          first_name: "Joko",
          last_name: "Wow",
          username: "Jok12344",
          email: "admin-ganteng@example.com",
          phone_number: "08951212190",
          position: "manager Tukang cireng",
          token: "example-jwt-token",
        },
      },
      {
        status: 200,
      },
    );
  }

  return NextResponse.json(
    {
      message: "Email atau password salah",
    },
    {
      status: 401,
    },
  );
}
