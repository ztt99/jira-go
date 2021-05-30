import { stat } from "fs"
import { useState } from "react"

interface State<D> {
    error: Error | null;
    data: D | null;
    stat: 'idle' | 'loading' | 'error' | 'success'
}

const defaultInitialState: State<null> = {
    stat: 'idle',
    data: null,
    error: null
}

export const useAsync = <D>(initialState?: State<D>) => {
    const [state, setState] = useState<State<D>>({
        ...defaultInitialState,
        ...initialState
    })

    const setData = (data: D) => setState({
        data,
        stat: 'success',
        error: null
    })

    const setError = (error: Error) => setState({
        data: null,
        stat: 'error',
        error: error
    })

    const run = (promise: Promise<any>) => {
        if (!promise || !promise.then) {
            throw new Error('传入promise类型数据')
        }

        setState({ ...state, stat: 'loading' })

        return promise.then(async data => {
            setData(await data.json())
            return data
        }).catch(e => {
            setError(e);
        })
    }


    return {
        isIdle: state.stat === 'idle',
        isLoading: state.stat === 'loading',
        isError: state.stat === 'error',
        isSuccess: state.stat === 'success',
        run,
        setData,
        setError,
        ...state
    }
}