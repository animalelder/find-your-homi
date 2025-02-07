import MessengerChatInbox from "@/components/messenger-chat-inbox";
import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative h-screen">
      <div className="fixed inset-0">
        <Link href="/profile" className="absolute left-4 top-4">
          <ArrowBigLeftDash
            color="black"
            className="size-12 fill-primaryGreen"
          />
        </Link>
      </div>
      <MessengerChatInbox />
    </div>
  );
}
