'use client'

import { insertTodo } from "../utils/supabase/actions";
import { Card, Button, Textarea, Input, DatePicker } from "@nextui-org/react";
import {now, getLocalTimeZone, today} from "@internationalized/date";

function TodoModal() {

  return (
    <Card className="xl:w-1/3 md:w-1/2 shadow-xl rounded-xl flex flex-col justify p-5 m-5">
        <p className="text-center text-2xl">Add event to list here!</p>
        <form className="flex-grow" action={insertTodo}>
            <div className="grid gap-y-5 p-5">
                <Textarea 
                isRequired 
                placeholder="Event details" 
                label="Event details"
                name="msg" />

                <DatePicker 
                showMonthAndYearPickers
                hideTimeZone
                minValue={now(getLocalTimeZone())}
                defaultValue={now(getLocalTimeZone())}
                label="Deadline"
                name="date"/>
                <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-sm" type="submit">Add</Button>
            </div>
        </form>
    </Card>
  )
}

export default TodoModal