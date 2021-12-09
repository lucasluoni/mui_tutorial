import { Grid } from '@mui/material'
import React from 'react'
import { UseForm, Form } from './../../components/UseForm'
import Controls from './../../components/controls/Controls'
import * as employeeService from './../../services/EmployeeService'

const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'}
]

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false
}

export default function EmployeeForm() {

  const {
    values,
    setValues,
    handleInputchange,
  } = UseForm(initialFValues)


  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onChange={handleInputchange}
            />
          <Controls.Input
            label='Email'
            name='email'
            value={values.email}
            onChange={handleInputchange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name='gender'
            label='Gender'
            value={values.gender}
            onChange={handleInputchange}
            items={genderItems}
          />
          <Controls.Select
            name='departmentId'
            label='Department'
            values={values.departmentId}
            onChange={handleInputchange}
            options={employeeService.getDepartmentCollection()}
          />
          <Controls.Switch
            name='isPermanent'
            label='Permanent employee'
            values={values.isPermanent}
            onChange={handleInputchange}
          />

        </Grid>
      </Grid>
    </Form>
  )
}
