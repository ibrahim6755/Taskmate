import React from "react";
import Form from "../form/Form";
import Input from "../input/Input";
import * as actions from "@/actions";
import { todoProps } from "@/types";
import { FaCheck } from "react-icons/fa";
import Button from "../button/Button";

const ChangeTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <div>
      <Form action={actions.changeStatus}>
        <Input name="inputId" value={todo.id} type="hidden"></Input>
        <Button
          text={<FaCheck />}
          actionButton
          bgColor={todo.isCompleted ? "bg-green-400" : "bg-blue-500"}
          type="submit"
        ></Button>
      </Form>
    </div>
  );
};

export default ChangeTodo;
