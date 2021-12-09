import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from './../../components/PageHeader'
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone'
import {Paper} from '@mui/material'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

export default function Employees() {
  
  const classes = useStyles()
  
  return (
    <>
      <PageHeader
        className={classes.pageHeader}
        title='New Employee'
        subtitle='Form with validation'
        icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
      />
      <Paper className={classes.pageContent} >
      <EmployeeForm />
      </Paper>
    </>
  )
}
