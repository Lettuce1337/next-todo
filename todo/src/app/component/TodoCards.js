'use client'

import { Card, Button } from "@nextui-org/react"
import { removeTodo } from "../utils/supabase/actions"
import { parseAbsolute, toTimeZone, getLocalTimeZone } from "@internationalized/date"


function TodoCards({todos}) {
    const timezone = getLocalTimeZone()

    return todos.map(({message,deadline,id})=>{

      const ZonedDateTime = new parseAbsolute(deadline)

      const a = toTimeZone(ZonedDateTime,timezone).toDate()
      console.log(a.toLocaleString('en-GB'))

      return (
        <Card className="p-10 grid gap-5" key={id}>
          <p>{message}</p>
          <p>Deadline:{a.toLocaleString('en-GB',{ dateStyle: 'short', timeStyle: 'short' })}</p>
          <form action={removeTodo}>
            <input type="hidden" name="id" value={id}></input>
            <Button color="danger" type="submit">Remove</Button>
          </form>
        </Card>
      )
    })
}

export default TodoCards