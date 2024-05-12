'use server'

import { supabase } from "./client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function login(formData){
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
    const email = formData.get('email')
    const password = formData.get('password')
    const {error} = await supabase.auth.signUp({email:email,password:password})
    if (error) {
            console.log(error)
            redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/','replace')
}

export async function logout(){
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
        redirect('/error')
    }
    revalidatePath('/', 'layout')
    redirect('/','replace')
}

export async function checkUser(){
    const {data, error} = await supabase.auth.getUser()
    if(!data.user){
        return false
    }
    return true
}