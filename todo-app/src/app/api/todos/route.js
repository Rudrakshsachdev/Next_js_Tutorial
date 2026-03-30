import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch todos", details: String(error) },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    // The body of the request is a stream, we need to parse it to JSON.
    const body = await request.json();

    if (!body?.title?.trim()) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const newTodo = await prisma.todo.create({
      data: {
        title: body.title.trim(),
      },
    });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create todo", details: String(error) },
      { status: 500 },
    );
  }
}
