import { redirect } from "next/navigation"
import { checkUser, getTodos } from "../utils/supabase/actions";
import TodoModal from "../component/TodoModal";
import TodoCards from "../component/TodoCards";

export default async function Home() {

    const state = await checkUser()
    if(!state){
      redirect('/login','replace')
    }

    const todos = await getTodos()


    return (
      <>
        <TodoModal/>
        <div className="grid gap-5 grid-cols-3">
          <TodoCards todos={todos}/>
        </div>
      </>
    );
}
