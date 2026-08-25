import { NextResponse } from "next/server";
import { fetchPlaceDetails } from "@/lib/google-places";

export async function GET() {
  const data = await fetchPlaceDetails();

  if (!data) {
    return NextResponse.json(
      { error: "Google Places no está configurado o no respondió." },
      { status: 503 },
    );
  }

  return NextResponse.json(data);
}
