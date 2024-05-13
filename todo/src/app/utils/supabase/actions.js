'use server'

import { createClient } from "./server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { convertZonedDateTimeToISOString } from "../time"

export async function login(formData){
    const supabase = createClient()
    const email = formData.get('email')
    const password = formData.get('password')
    const {error} = await supabase.auth.signInWithPassword({email:email,password:password})
    if (error) {
        console.log(error)
        redirect('/error')
      }
    
      revalidatePath('/', 'layout')
      redirect('/','replace')
}

export async function signUp(formData){
    const supabase = createClient()
    const email = formData.get('email')
    const password = formData.get('password')
    const {error} = await supabase.auth.signUp({email:email,password:password})
    if (error) {
            console.log(error)
            redirect('/error')
    }
    revalidatePath('/', 'layout')
    redirect('/login','replace')
}

export async function logout(){
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
        redirect('/error')
    }
    revalidatePath('/', 'layout')
    redirect('/login','replace')
}

export async function checkUser(){
    const supabase = createClient()
    const {data, error} = await supabase.auth.getUser()
    if(!data.user){
        return false
    }
    return true
}

export async function insertTodo(formData){

    const supabase = createClient()
    const msg = formData.get('msg')
    const date = convertZonedDateTimeToISOString(formData.get('date'))
    const user_id = (await supabase.auth.getUser()).data.user.id


    const {data,error} = await supabase
                                .from('todos')
                                .upsert({user_id:user_id,message:msg,deadline:date},{onConflict:'user_id,message'})

    revalidatePath('/', 'layout')
}

export async function getTodos(){

    const supabase = createClient()
    const user_id = (await supabase.auth.getUser()).data.user.id

    const {data,error} = await supabase
                                .from('todos')
                                .select()
                                .eq('user_id',user_id)

    return data
}

export async function removeTodo(formData){

    const supabase = createClient()
    const user_id = (await supabase.auth.getUser()).data.user.id
    const id = formData.get('id')

    const {error} = await supabase
                            .from('todos')
                            .delete()
                            .match({user_id:user_id,id:id})

    revalidatePath('/', 'layout')
}