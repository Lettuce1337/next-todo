import { createClient } from "../utils/supabase/server";
import { logout } from "../utils/supabase/actions";
import { 
  Button,  
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem 
} from "@nextui-org/react";

export default async function HomeLayout({ children }) {

  const supabase = createClient()
  const {data: {user}} = await supabase.auth.getUser()

  return (
      <main className="min-h-full min-w-full">
        <Navbar className="bg-gradient-to-r from-teal-400 to-yellow-200"
        maxWidth="full"
        isBlurred={false}
        isBordered
        >
          <NavbarContent className="gap-5"
          justify="end"
          >
            <NavbarItem>
              <p>Welcome back!</p>
            </NavbarItem>

            <NavbarItem>
            <p>{user?.email}</p>
            </NavbarItem>

            <NavbarItem>
              <form action={logout}>
                <Button type="submit" >Log out</Button>  
              </form>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <main className="min-h-full min-w-full flex justify-center items-center flex-col">
          {children}
        </main>
      </main>
  );
}