import { prisma } from "@/lib/prisma";

export async function DELETE(req, { params }) {
  const { id } = await params;

  await prisma.todo.delete({
    where: {
      id,
    },
  });

  return Response.json({ message: "Todo deleted" });
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  const body = await req.json();

  const updatedTodo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title: body.title,
    },
  });

  return Response.json(updatedTodo);
}
