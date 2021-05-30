import React, { useState, useEffect } from 'react'
import qs from 'qs'
import { List, Project } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject, useDebounced, useMount } from '../../utils'
import { useHttp } from '../../utils/http'
import { useAsync } from '../../utils/use-async'
import { Helmet } from 'react-helmet'

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const http = useHttp()
    const { run, isLoading, error, data: list } = useAsync<Project[]>()


    const debouncedvalue = useDebounced(param, 1000)
    useEffect(() => {

        run(
            http('http://localhost:3001/projects', {
                data: cleanObject(debouncedvalue)
            })
        )


    }, [debouncedvalue])
    useMount(() => {
        fetch('http://localhost:3001/users').then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    })
    return <div className="">
        <Helmet>
            <title>项目首页</title>
        </Helmet>
        <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
        <List loading={isLoading} dataSource={list || []} users={users} ></List>
    </div >
}