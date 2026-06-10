import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      message: "Success",
      data: [
        {
          category: "Desain",
          imgUrl: "/assets/svg/programming.svg",
          title: "Belajar Pemrograman di Tahun 2025",
          subTitile: "10. Perkenalan dengan CSS",
          progress: 100,
        },
        {
          category: "Desain",
          imgUrl: "/assets/svg/restaurant.svg",
          title: "Membangun Restoran di Tahun 2025",
          subTitile: "2. Pembuatan business model ",
          progress: 25,
        },
        {
          category: "Desain",
          imgUrl: "/assets/svg/interior.svg",
          title: "Belajar Desain Interior",
          subTitile: "5. Perkenalan dengan Autocad",
          progress: 0,
        },
      ],
    },
    {
      status: 200,
    },
  );
}
