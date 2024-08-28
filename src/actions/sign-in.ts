"use server";

import * as authenticate from "@/auth";
import { z } from "zod";

interface CreateUserFormState {
  errors: {
    name?: string[];
    email?: string[];
    phone?: string[];
    password?: string[];
    _form?: string[];
  };
}

export async function credentialsSignIn(
  formState: CreateUserFormState,
  formData: FormData,
  additionalData?: { phone: string }
): Promise<CreateUserFormState> {
  const email = formData?.get("identifier") as string;
  const password = formData?.get("password") as string;
  console.log(email, password);
  const identifier =
    additionalData?.phone || (formData?.get("identifier") as string);
  const requestBody = {
    identifier,
    password,
  };
  const authResponse = await fetch("http://127.0.0.1:8000/api/v1/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!authResponse.ok) {
    return {
      errors: {
        _form: ["Invalid Credentials"],
      },
    };
  }
  const user = await authResponse.json();

  const data = {
    accessToken: user.data.access,
    name: user.data.name,
    email: user.data.email,
    id: user.data.id,
    image: user.data.image,
  };

  return authenticate.signIn("credentials", data);
  // return auth.signIn("credentials", data);
}


