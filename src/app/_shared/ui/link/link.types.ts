import React from "react";

export type AppLinkProps = {
    href: string;
    children: string | React.ReactNode
    className?: string
    isActive?: boolean
    isBlank?: boolean
};