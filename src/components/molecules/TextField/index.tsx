import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

type TextFieldProps = {
    id:string
    placeholder:string
    icon:React.ReactNode | null
    length:number
}

const TextFieldComponent = ({id, placeholder, icon, length} : TextFieldProps) => {
  return (
    <TextField
    sx={{width:length}}
    id={id}
    placeholder={placeholder}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          {icon}
        </InputAdornment>
      ),
    }}
    variant="standard"
  />
  )
}

export default TextFieldComponent
