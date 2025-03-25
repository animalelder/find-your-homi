"use server";

import { auth } from "@/lib/auth";
import { encodedRedirect } from "@/utils/utils";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required",
    );
  }

  await auth.api.signUpEmail({
    body: { name: name || "Steve Sands", email: email, password: password },
  });
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await auth.api.signInEmail({
    body: { email, password },
  });

  return redirect("/profile");
};

export const signOutAction = async () => {
  await auth.api.signOut({ headers: await headers() });
  throw redirect("/");
};
