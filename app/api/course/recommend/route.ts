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
      data: [
        {
          category: "Desain",
          imgUrl: "/assets/svg/blender.svg",
          title: "Belajar 3D Modelling dengan Blender",
          subTitile: "5. Perkenalan dengan rigging",
          progress: 0,
        },
        {
          category: "IT",
          imgUrl: "/assets/svg/programming.svg",
          title: "Belajar Coding dengan Javascript",
          subTitile: "3. Belajar variable",
          progress: 0,
        },
        {
          category: "Desain",
          imgUrl: "/assets/svg/interior.svg",
          title: "3D Modelling Lanjutan dengan 3Ds Max",
          subTitile: "10. Perkenalan vertex",
          progress: 0,
        },
        {
          category: "Visualisasi Data",
          imgUrl: "/assets/svg/blender.svg",
          title: "Belajar Visualisasi Data dengan Tableu",
          subTitile: "2. Jenis jenis diagram",
          progress: 0,
        },
      ],
    },
    {
      status: 200,
    },
  );
}
