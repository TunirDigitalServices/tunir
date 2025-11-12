import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("📨 Data reçue:", data);

    // const filePath = path.join(process.cwd(), "submissions.csv");
    const filePath = path.join(process.cwd(), "data", "submissions.csv");


    console.log("💾 Fichier CSV :", filePath);

    const headers = [
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Age",
      "Ville",
      "Lab",
      "Note",
    ];

    if (!fs.existsSync(filePath)) {
      console.log("🧱 Création du fichier...");
      fs.writeFileSync(filePath, headers.join(",") + "\n", "utf-8");
    }

    const line =
      [
        data.firstName || "",
        data.lastName || "",
        data.email || "",
        data.phone || "",
        data.age || "",
        data.ville || "",
        data.lab || "",
        data.note || "",
      ].join(",") + "\n";

    fs.appendFileSync(filePath, line, "utf-8");
    console.log("✅ Ligne ajoutée au CSV !");

    return new Response(JSON.stringify({ message: "Submission saved!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ Erreur serveur:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
