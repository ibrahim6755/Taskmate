import AddTodo from "@/components/todos/AddTodo";
import Image from "next/image";
import { prisma } from "@/utils/prisma";
import Todo from "@/components/todos/Todo";
import Navbar from "@/components/navbar/Navbar";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <Navbar />
      <div className="w-screen py-20 flex justify-center flex-col items-center">
        <div className="flex justify-center flex-col items-center">
          {/* input todo */}
          <AddTodo />
          {/* map todo */}
          {data.length === 0 ? (
            <div className="m-12">
              <h2 className="text-2xl font-bold">No Todos...</h2>
              <h4 >Add Todos to view them</h4>
            </div>
          ) : (
            <div className="flex flex-col  gap-5 items-center justify-center mt-10 w-screen">
              {data.map((todo, id) => (
                <div key={id} className="w-full">
                  <Todo todo={todo} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
