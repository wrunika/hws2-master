import React from 'react'
import upImg from './up.png'
import downImg from './down.png'
import noneImg from './up-and-down.svg'

// добавить в проект иконки и импортировать
/*const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'*/
const downIcon = downImg
const upIcon = upImg
const noneIcon = noneImg

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    //return up // исправить
    if (sort !== down && sort !== up) return down
    if (sort === up) return ''
    if (sort === down) return up
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    //console.log(up)
    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}
            <img id={id + '-icon-' + sort} width={'15px'} src={icon} alt=""/>

            {/*{icon}*/} {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
