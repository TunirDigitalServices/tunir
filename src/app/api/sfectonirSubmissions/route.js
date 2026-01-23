import prisma from "../../../../lib/prisma";


export async function GET(req) {
  try {
    const submissions = await prisma.sfectonirSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });
    return new Response(JSON.stringify(submissions), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch Sfectonir submissions" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      age,
      ville,
      lab,
      note,
    } = body;

    // ───── Validation ─────
    if (!firstName || !lastName || !email || !phone || !lab) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const submission = await prisma.sfectonirSubmission.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        age: age ? parseInt(age) : null,
        ville: ville || null,
        lab,
        note: note || null,
      },
    });

    return new Response(JSON.stringify({ message: "Submission successful", submission }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to submit" }), { status: 500 });
  }
}