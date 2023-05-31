import React, {useState} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
    count: number
    setCount: any
    sendQuery: any
    onChangeSelect2: any
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id, count, setCount, sendQuery, onChangeSelect2 = 'hw15',
    }
) => {
    console.log(totalCount)
    console.log(itemsCountForPage)

    const lastPage = Math.ceil(totalCount / itemsCountForPage)  // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        console.log(event)
        console.log(page)
        onChange(page, count)
        // пишет студент
    }

    const onChangeSelect = (event: any) => {
        // пишет студент
        setCount(event.currentTarget.value)
        onChangeSelect2(page, event.currentTarget.value)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={count}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
