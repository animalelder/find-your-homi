"use client";

import { Avatar } from "@/subframe/components/Avatar";
import { ChatList } from "@/subframe/components/ChatList";
import { ChatReceived } from "@/subframe/components/ChatReceived";
import { ChatSent } from "@/subframe/components/ChatSent";
import { IconButton } from "@/subframe/components/IconButton";
import { TextField } from "@/subframe/components/TextField";
import React, { Fragment, useRef, useState } from "react";

const initialMessages: React.ReactElement[] = [
  <ChatReceived
    avatar="https://res.cloudinary.com/subframe/image/upload/v1738862876/uploads/6038/xfmdzz1l84xc0tnky2q7.png"
    initials="LB"
    key={1}
    name="Lisa Breckin"
    message="👋 Hey! What apartments have you looked at recently? I really love Metropolitan Haven."
    time="11:11am"
  />,
  <ChatSent
    name="You"
    key={2}
    message="Just browsing...Metropolitan Haven? I'll check it out!"
    timestamp="11:21am"
  />,
  <ChatReceived
    avatar="https://res.cloudinary.com/subframe/image/upload/v1738862951/uploads/6038/is46vjzgaard63lox9kl.png"
    initials="LB"
    name="Lisa Breckin"
    key={3}
    message="I really think you'd like it! Go check it out. It might be walkable from your office 🤔🤔🤔 "
    time="11:24am"
  />,
  <ChatSent
    name="You"
    key={4}
    message="Totally is. Let me wrap up this report real fast and I'll share my thoughts ☺️"
    timestamp="11:25am"
  />,
  <ChatReceived
    avatar="https://res.cloudinary.com/subframe/image/upload/v1738863066/uploads/6038/v0cmixj8afqv8lio3iqk.png"
    initials="LB"
    key={6}
    name="Lisa Brecken"
    message="I think we would make great roommates. And I think Metropolitan Haven just might be the right place. Think about it... I could be your Homi 🥹"
    time="4:44 PM"
  />,
];

function MessengerChatInbox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const ref = useRef<typeof TextField | null>(null);

  const handleSend = (message: string, messages: React.ReactElement[]) => {
    setMessages((currentOnes) => [
      ...currentOnes,
      <ChatSent
        name="You"
        key={currentOnes.length + 1}
        message={message}
        timestamp="7:31 PM"
      />,
    ]);

    setMessage("");
  };

  return (
    <div className="container flex items-start h-full rounded-md shadow-md bg-default-background mobile:flex-col mobile:flex-nowrap mobile:gap-0 max-w-none">
      <div className="border-neutral-border mobile:h-auto mobile:w-full mobile:flex-none flex max-w-[384px] shrink-0 grow basis-0 flex-col items-start self-stretch border-r border-solid">
        <div className="flex flex-col items-center w-full gap-1 px-4 pt-4 pb-2">
          <div className="flex items-center w-full gap-4">
            <div className="flex items-center gap-4 px-2 py-2 shrink-0 grow basis-0">
              <span className="text-heading-3 font-heading-3 text-default-font shrink-0 grow basis-0">
                HOMI Chat
              </span>
            </div>
            <IconButton
              variant="brand-tertiary"
              icon="FeatherPenSquare"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
          </div>
          <div className="flex flex-col items-center w-full gap-4 px-2 py-2">
            <TextField
              className="flex-none w-full h-auto"
              variant="filled"
              label=""
              helpText=""
              icon="FeatherSearch"
            >
              <TextField.Input
                placeholder="Search"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
          </div>
        </div>
        <div className="flex flex-col items-start w-full gap-4 px-4 py-4 overflow-auto shrink-0 grow basis-0">
          <ChatList>
            <ChatList.ChatListItem
              avatar="https://res.cloudinary.com/subframe/image/upload/v1738862522/uploads/6038/anoxisdsffwgiwjrmnzg.png"
              name="Warren Daniels"
              message="Let me know, you can come look for yourself!"
              timestamp="Just now"
              unread={true}
            />
            <ChatList.ChatListItem
              avatar="https://res.cloudinary.com/subframe/image/upload/v1738862502/uploads/6038/icuzu7gedbgwtu4ex8n4.png"
              name="Lisa B. "
              message="I think we would make great roommates...what are your thoughts?"
              timestamp="1 hour ago"
              selected={true}
            />
            <ChatList.ChatListItem
              avatar="https://res.cloudinary.com/subframe/image/upload/v1738862540/uploads/6038/f7r1idyrbde0xcg2kcjr.png"
              name="Travis F."
              message="LOL how long have you lived downtown?"
              timestamp="18 hours ago"
              replied={true}
            />
            <ChatList.ChatListItem
              avatar="https://res.cloudinary.com/subframe/image/upload/v1738862605/uploads/6038/qwolssltw7twalc5zhwl.png"
              name="Sheng Wang "
              message="That's how I feel. Let me know what you think!"
              timestamp="Yesterday"
              replied={true}
            />
            <ChatList.ChatListItem
              avatar="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/m0kfajqpwkfief00it4v.jpg"
              name="Lisa McKinley"
              message="awesome, can't wait!"
              timestamp="3 days ago"
              unread={true}
            />
          </ChatList>
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch mobile:h-auto mobile:w-full mobile:flex-none mobile:border-t mobile:border-solid mobile:border-neutral-border shrink-0 grow basis-0">
        <div className="flex items-center w-full px-6 py-6 border-b border-solid border-neutral-border">
          <div className="flex items-center gap-4 shrink-0 grow basis-0">
            <Avatar
              size="large"
              image="https://res.cloudinary.com/subframe/image/upload/v1738863559/uploads/6038/mtxztkxsus0ff3wajuu5.png"
            >
              A
            </Avatar>
            <div className="flex flex-col items-start shrink-0 grow basis-0">
              <span className="w-full text-heading-3 font-heading-3 text-default-font">
                Lisa B. ✅ Verified
              </span>
              <span className="text-body font-body text-subtext-color">
                lisa.breckin@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-2">
              <IconButton
                variant="brand-tertiary"
                icon="FeatherVideo"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <IconButton
                variant="brand-tertiary"
                icon="FeatherPhone"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end w-full overflow-auto shrink-0 grow basis-0">
          <div className="container flex flex-col items-center w-full gap-4 py-12 overflow-auto max-w-none shrink-0 grow basis-0">
            <div className="flex flex-col items-start w-full gap-2 shrink-0 grow basis-0" />
            <div className="flex flex-col items-center justify-end w-full gap-8">
              {messages.map((message, index) => (
                <Fragment key={index}>{message}</Fragment>
              ))}
            </div>
          </div>
          <div className="container flex items-end w-full gap-2 pt-1 pb-8 max-w-none">
            <div className="flex items-end">
              <IconButton
                variant="brand-tertiary"
                icon="FeatherPlusCircle"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <IconButton
                variant="brand-tertiary"
                icon="FeatherImage"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <IconButton
                variant="brand-tertiary"
                icon="FeatherSmile"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
            <TextField
              className="h-auto shrink-0 grow basis-0"
              label=""
              helpText=""
            >
              <TextField.Input
                placeholder="Type your message..."
                ref={ref as any}
                value={message}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setMessage(event.target.value);
                }}
              />
            </TextField>
            <IconButton
              variant="brand-primary"
              icon="FeatherSend"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                handleSend(message, messages);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessengerChatInbox;
