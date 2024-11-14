import classNames from "classnames";
import { CardProps } from "./card.types";

import styles from './card.module.css';

export default function Card(props: CardProps) {
    const {
        children,
        className
    } = props
    return (
        <div className={classNames(styles.card, className)}>
            {children}
        </div>
    )
}