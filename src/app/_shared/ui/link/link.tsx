'use client'

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import { AppLinkProps } from "./link.types";

import styles from './link.module.css'

export default function AppLink(props: AppLinkProps) {
    const {
        href,
        className,
        children,
        isActive,
        isBlank
    } = props;
    const pathname = usePathname()

    return (
        <Link
            href={href}
            target={isBlank ? '_blank' : '_self'}
            className={classNames(
                styles.linkKernel,
                className,
                { [`${styles.activeKernel}`]: isActive && href === `.${pathname}` }
            )}
        >
            {children}
        </Link>
    )
}