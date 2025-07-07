"use server";

import { signIn, signOut } from "./auth";

export const handleSocialLogin = async (
  redirectUrl: string,
  formData: FormData
) => {
  const action = formData.get("action")?.toString();

  await signIn(action, { redirectTo: redirectUrl || "/" });
};

export const userSignOut = async () => {
  await signOut({ redirectTo: "/" });
};
