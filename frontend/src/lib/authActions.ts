'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabase } from "./supabaseClient";

export async function handleSignUpSubmit(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }

  const response = await fetch(process.env.BACKEND_URL! + '/auth/sign-up', {
    method: 'POST',
    body: formData,
  });
  
  if (!response.ok) {
    throw new Error('Failed to sign up');
  }
  const body = await response.json()  
  const session = body.session
  const cookieStore = await cookies();
  cookieStore.set('token', session.access_token);
  redirect('/protected/dashboard');
}

export async function handleSignInSubmit(formData: FormData) {
  const response = await fetch(process.env.BACKEND_URL! + '/auth/sign-in', {
    method: 'POST',
    body: formData,
  });
  console.log(response);
  if (!response.ok) {
    throw new Error('Failed to sign in');
  }
  const body = await response.json()
  const session = body.session
  const cookieStore = await cookies();
  cookieStore.set('token', session.access_token);
  redirect('/protected/dashboard');
}

export async function handleSignOut() {
  const cookieStore = await cookies();
  cookieStore.delete('token');
  supabase.auth.signOut();
  redirect('/');
}