import { NextResponse } from "next/server";

export function GET() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "[EMAIL_ADDRESS]",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "[EMAIL_ADDRESS]",
    },
  ];
  return NextResponse.json(users);
}

// export function POST() {

// }

// export function PUT() {

// }

// export function DELETE() {

// }
