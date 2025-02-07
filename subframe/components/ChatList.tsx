"use client";
/*
 * Documentation:
 * Chat List — https://app.subframe.com/3372f2ee60d9/library?component=Chat+List_0912e9e6-c7c3-497f-bf60-cb5361d8c378
 */

import * as SubframeCore from "@subframe/core";
import React from "react";
import { Avatar } from "./Avatar";

interface ChatListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: string;
  name?: React.ReactNode;
  message?: React.ReactNode;
  timestamp?: React.ReactNode;
  replied?: boolean;
  unread?: boolean;
  selected?: boolean;
  className?: string;
}

const ChatListItem = React.forwardRef<HTMLElement, ChatListItemProps>(
  function ChatListItem(
    {
      avatar,
      name,
      message,
      timestamp,
      replied = false,
      unread = false,
      selected = false,
      className,
      ...otherProps
    }: ChatListItemProps,
    ref,
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/f0df7a36 flex w-full cursor-pointer items-center gap-4 overflow-hidden rounded-md px-3 py-3 hover:bg-neutral-50 active:bg-neutral-100",
          {
            "bg-brand-primary hover:bg-brand-300 active:bg-brand-200": selected,
          },
          className,
        )}
        ref={ref as any}
        {...otherProps}
      >
        <Avatar size="large" image={avatar}>
          JS
        </Avatar>
        <div className="flex flex-col items-start shrink-0 grow basis-0">
          <div className="flex items-center w-full gap-2">
            {name ? (
              <span className="text-body-bold font-body-bold text-default-font shrink-0 grow basis-0">
                {name}
              </span>
            ) : null}
            {timestamp ? (
              <span
                className={SubframeCore.twClassNames(
                  "text-caption font-caption text-subtext-color",
                  {
                    "text-default-font": selected,
                    "text-caption-bold font-caption-bold text-default-font":
                      unread,
                  },
                )}
              >
                {timestamp}
              </span>
            ) : null}
          </div>
          <div className="flex items-center w-full gap-2">
            <SubframeCore.Icon
              className={SubframeCore.twClassNames(
                "text-body-bold font-body-bold text-subtext-color hidden",
                { "inline-flex": replied },
              )}
              name="FeatherCornerUpLeft"
            />
            {message ? (
              <span
                className={SubframeCore.twClassNames(
                  "text-body font-body text-subtext-color line-clamp-1 shrink-0 grow basis-0",
                  {
                    "text-default-font tracking-wide": selected,
                    "font-body-bold text-default-font text-sm font-bold":
                      unread,
                    "text-body font-body": replied,
                  },
                )}
              >
                {message}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  },
);

interface ChatListRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const ChatListRoot = React.forwardRef<HTMLElement, ChatListRootProps>(
  function ChatListRoot(
    { children, className, ...otherProps }: ChatListRootProps,
    ref,
  ) {
    return children ? (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full flex-col items-start gap-1",
          className,
        )}
        ref={ref as any}
        {...otherProps}
      >
        {children}
      </div>
    ) : null;
  },
);

export const ChatList = Object.assign(ChatListRoot, {
  ChatListItem,
});
