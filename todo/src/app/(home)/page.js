import { redirect } from "next/navigation"
import { checkUser } from "../utils/supabase/actions";
import TodoModal from "../component/TodoModal";
import TodoCards from "../component/TodoCards";

export default async function Home() {

    const state = await checkUser()
    if(!state){
      redirect('/login','replace')
    }


    return (
      <>
        <TodoModal/>
        <div className="grid gap-5 grid-cols-3">
          <TodoCards/>
        </div>
      </>
    );
}
