import { Button, Card } from "@nextui-org/react"
import { getTodos, removeTodo } from "../utils/supabase/actions"

async function TodoCards() {
    const todos = await getTodos()

    return todos.map(({message,deadline,id})=>{
      return (
        <Card className="p-10" key={id}>
          <p>{message}</p>
          <p>{new Date(deadline).toLocaleString('en-GB')}</p>
          <form action={removeTodo}>
            <input type="hidden" name="id" value={id}></input>
            <Button color="danger" type="submit">Remove</Button>
          </form>
        </Card>
      )
    })
}

export default TodoCards