import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '300px', m: '0 15px'
            }}
            //onChange={}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            value={props.value}
            //onChange={}
        />
    )
}

export default SuperRange
