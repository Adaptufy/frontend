import { Step } from "@/types";
import { NextResponse } from "next/server";

const STEPS: Step[] = [
  {
    id: 1,
    description: 'This is the detailed description of step 1.',
    short_description: 'Step 1 short description',
  },
  {
    id: 2,
    description: 'This is the detailed description of step 2.',
    short_description: 'Step 2 short description',
  },
];

export async function GET() {
  return NextResponse.json(STEPS);
}