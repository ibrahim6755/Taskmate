import * as actions from "@/actions";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";

const AddTodo = () => {
  return (
    <div>
      <Form action={actions.createTodo}>
        <div className="gap-4 flex items-center justify-center">
          <Input name="input" type="text" placeholder="Add Todo Here..."/>
          <Button type="submit" text="Add" bgColor="bg-gradient-to-tl from-purple-800 to-purple-400 p-4" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
