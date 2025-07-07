"use client";
import { handleSocialLogin } from "@/actions";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import React from "react";

const SocialLogin = () => {
  const params = useSearchParams();
  const socialLoginAction = handleSocialLogin.bind(
    null,
    params.get("callbackUrl")?.toString() || ""
  );
  return (
    <div>
      <form action={socialLoginAction}>
        <Button
          type="submit"
          name="action"
          value="google"
          className="rounded-xl"
          size="sm"
          variant="outline"
        >
          Sign in with Google
        </Button>
      </form>
    </div>
  );
};

export default SocialLogin;
