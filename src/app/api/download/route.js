import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'submissions.csv');

  if (!fs.existsSync(filePath)) {
    return new Response('No submissions yet.', { status: 404 });
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');

  return new Response(fileContents, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="submissions.csv"',
    },
  });
}
