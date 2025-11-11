import fs from "fs";
import path from "path";

export async function POST(req) {
  const data = await req.json();
  const filePath = path.join(process.cwd(), "submissions.csv");

  const headers = ["First Name","Last Name","Email","Phone","Age","Ville","Lab","Note"];

  // créer le fichier avec l'en-tête s'il n'existe pas
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, headers.join(",") + "\n", "utf-8");
  }

  const line = [
    data.firstName || "",
    data.lastName || "",
    data.email || "",
    data.phone || "",
    data.age || "",
    data.ville || "",
    data.lab || "",
    data.note || ""
  ].join(",") + "\n";

  fs.appendFileSync(filePath, line, "utf-8");

  return new Response(JSON.stringify({ message: "Submission saved!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
