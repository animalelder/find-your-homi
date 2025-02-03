"use client";

import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  ...props
}: Props) {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full rounded-full px-4 py-2 font-medium text-white transition hover:bg-red-500"
      type="submit"
      aria-disabled={pending}
      {...props}
    >
      {pending ? pendingText : children}
    </Button>
  );
}
