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
  const authResponse = await fetch(
    "https://devapi.propsoft.ai/api/interview/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );

  if (!authResponse.ok) {
    return {
      errors: {
        _form: ["Invalid Credentials"],
      },
    };
  }
  const user = await authResponse.json();

  const data = {
    accessToken: user.access_token,
    name: user.user_data.first_name,
    email: user.user_data.email,
    id: user.user_data.id,
    // image: user.data.image,
  };

  return authenticate.signIn("credentials", data);
  // return auth.signIn("credentials", data);
}


