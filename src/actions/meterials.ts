'use server'

import { auth } from "@/auth";
import { ExtraParams, SessionProps } from "@/models/materialsModel";
import { MATERIALS_API } from "@/services/api-end-point/materials";
import clientAxios from "@/services/config";
import { redirect } from "next/navigation";

export async function materialsList(params: ExtraParams) {
  const session = (await auth()) as SessionProps;

  if (!session?.user) {
    redirect("/login");
  }

  try {
    const res = await clientAxios.get(
      `${MATERIALS_API.fetch_post_materials_list}`,
      {
        params,
        headers: { Authorization: `Bearer ${session?.user?.token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
