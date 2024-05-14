'use client'

import { Card, Button } from "@nextui-org/react"
import { removeTodo } from "../utils/supabase/actions"
import { parseAbsolute, toTimeZone, getLocalTimeZone } from "@internationalized/date"


function TodoCards({todos}) {
    const timezone = getLocalTimeZone()

    return todos.map(({message,deadline,id})=>{

      let adjustedZonedDateTime = null

      if(deadline){
        const zonedDateTime = new parseAbsolute(deadline)
        adjustedZonedDateTime = toTimeZone(zonedDateTime,timezone)
                                      .toDate()
                                      .toLocaleString('en-GB',{ dateStyle: 'short', timeStyle: 'short' })

      }

      return (
        <Card className="p-10 grid gap-5" key={id}>
          <p>{message}</p>
          <p>Deadline:{adjustedZonedDateTime? adjustedZonedDateTime:'None'}</p>
          <form action={removeTodo}>
            <input type="hidden" name="id" value={id}></input>
            <Button color="danger" type="submit">Remove</Button>
          </form>
        </Card>
      )
    })
}

export default TodoCards