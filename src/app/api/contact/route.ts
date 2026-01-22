import {prisma} from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("API /contact body:", body);

    const msg = await prisma.contactMessage.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        company: body.company,
        email: body.email,
        phone: body.phone,
        message: body.message,
      },
    });

    console.log("Saved message:", msg);

    return NextResponse.json({ success: true, msg });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return NextResponse.json(
      { success: false, error: "Impossible d'envoyer le message" },
      { status: 500 }
    );
  }
}
