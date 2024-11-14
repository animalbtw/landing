import { TypographyProps } from "./typography.types";
import classNames from "classnames";

import styles from './typography.module.css';

export default function Typography(props: TypographyProps) {
    const {
        children,
        fontFamily = 'coolveticaRG',
        className
    } = props;

    return (
        <span
            style={{ fontFamily: fontFamily }}
            className={className}
        >
            {children}
        </span>
    )
}