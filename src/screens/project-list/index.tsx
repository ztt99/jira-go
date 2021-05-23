import React, { useState, useEffect } from 'react'
import qs from 'qs'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject, useDebounced, useMount } from '../../utils'

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])

    const debouncedvalue = useDebounced(param, 1000)
    useEffect(() => {
        fetch('http://localhost:3001/projects?' + qs.stringify(cleanObject(debouncedvalue))).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })

    }, [debouncedvalue])
    useMount(() => {
        fetch('http://localhost:3001/users').then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    })
    return <div className="">
        <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
        <List list={list} users={users}></List>
    </div >
}