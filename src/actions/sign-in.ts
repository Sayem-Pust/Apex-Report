"use server";

import * as authenticate from "@/auth";
import { USER_API } from "@/services/api-end-point/users";
import clientAxios from "@/services/config";
import { z } from "zod";

const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  // .regex(
  //   /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
  //   "password must contains at least one character and one number"
  // ),
});
interface CreateUserFormState {
  errors: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
}

export async function credentialsSignIn(
  formState: CreateUserFormState,
  formData: FormData
): Promise<CreateUserFormState> {
  const result = loginUserSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const requestBody = {
    email: result.data.email,
    password: result.data.password,
  };
  try {
    const user = await clientAxios.post(USER_API.user_signin, requestBody);

    const data = {
      accessToken: user.data.access_token,
      name: user.data.user_data.first_name,
      email: user.data.user_data.email,
      id: user.data.user_data.id,
    };

    return authenticate.signIn("credentials", data);
  } catch (error) {
    console.log(error);

    return {
      errors: {
        _form: ["Invalid Credentials"],
      },
    };
  }
}
