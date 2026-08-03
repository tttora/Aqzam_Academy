import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const update = await req.json();

  console.log(update);

  return NextResponse.json({ ok: true });
}