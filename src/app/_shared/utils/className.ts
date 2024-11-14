import classNames from "classnames"

type serializedClassNameArgs = {
    [key: string]: string
}

export const serializedClassName = (args: serializedClassNameArgs | string) => classNames(args)
