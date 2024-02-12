import React from 'react'
import MainScreen from '../MainScreen'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const MyNotes = () => {
  return <MainScreen title='Welcome back kushan de sivla'>
    <Link to='createnote'>
        <Button style={{marginLeft:10,marginBottom:6}} size='lg'>Create New NOte</Button>
    </Link>
  </MainScreen>
}

export default MyNotes