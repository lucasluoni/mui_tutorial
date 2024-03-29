import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'

export function UseForm(initialFValues) {

  const [values, setValues] = useState(initialFValues)

  const handleInputchange = (e) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }


  return {
    values,
    setValues,
    handleInputchange
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1)
    }
  }
}))

export function Form(props) {
  const classes = useStyles()
  return (
    <form className={classes.root} autoComplete='off' >
      {props.children}
    </form>
  )
}
