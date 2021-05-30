import { useEffect, useRef, useState } from "react"

export const cleanObject = (obj: object) => {
    const result = { ...obj }
    Object.keys(obj).forEach(key => {
        //@ts-ignore
        if (is0(result[key]) && !result[key]) delete result[key]
    })
    return result
}

export const is0 = (val: unknown): boolean => val !== 0

export const useMount = (cb: () => void) => {
    useEffect(() => {
        cb()
    }, [])
}

export const useDebounced = <T>(value: T, delay?: number) => {
    const [debouncedValue, setdebouncedValue] = useState(value)
    useEffect(() => {

        const timeout = setTimeout(() => setdebouncedValue(value), delay)
        return () => clearTimeout(timeout)

    }, [value, delay])
    return debouncedValue
}

export const useDocumentTitle = (title: string, keepOnUnmount: boolean = true) => {

    const oldTitle = useRef(document.title).current

    useEffect(() => {
        document.title = title
    }, [title])
    useEffect(() => {

        return () => {
            if (!keepOnUnmount) {
                document.title = oldTitle
            }
        }
    }, [oldTitle, keepOnUnmount])
}
