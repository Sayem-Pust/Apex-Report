"use server";

import * as auth from "@/auth";

export async function signOut() {
  return auth.signOut({redirectTo:"/login", redirect:true});
}
