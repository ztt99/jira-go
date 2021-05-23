export const cleanObject = (obj: any) => {
    const result = { ...obj }
    Object.keys(obj).forEach(key => {
        if (is0(result[key]) && !result[key]) delete result[key]
    })
    return result
}

export const is0 = (val: number) => val !== 0