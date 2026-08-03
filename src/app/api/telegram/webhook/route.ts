import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const update = await req.json();

  console.log("NEW UPDATE:");
  console.log(JSON.stringify(update, null, 2));

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({
    status: "Webhook is working ✅",
  });
}