import { redirect } from "next/dist/server/api-utils";
import { checkUser, logout } from "./utils/supabase/actions";
import { Button } from "@nextui-org/react";

export default async function Home() {

    if(await !checkUser){
      redirect('/login','replace') //Temporary solution, TODO: server action
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form action={logout}>
          <Button type="submit">Log out</Button>  
        </form>
      </main>
    );
}
