export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);

  // TODO: Send to Zoho API

  return Response.json({ success: true });
}
