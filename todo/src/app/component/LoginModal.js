import { Button, Card, Input, Link } from "@nextui-org/react";
import { login } from "../utils/supabase/actions";

function LoginModal() {
  return (
    <Card className="w-1/3 bg-white shadow-xl rounded-xl flex flex-col p-5">
        <p>Please log in to continue</p>
        <form className="flex-grow" action={login}>
            <div className="grid gap-y-5 p-5">
                <Input isRequired type="email" name="email" placeholder="Email"/>
                <Input isRequired type="password" name="password" placeholder="Password"/>
                <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400" type="submit">Login</Button>
                <Link className="ml-auto" href="/signup">Sign up</Link>
            </div>
        </form>
    </Card>
  )
}

export default LoginModal