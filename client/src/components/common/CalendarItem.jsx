import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'
import '../../css/DashboardStyles.css'
import DatePicker from 'react-datepicker'
import { Button, Container, Input, Typography } from '@mui/material';

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer ({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [{}]

const CalendarItem = () => {
    const [newEvent, setNewEvent] = useState({title:"",start:"",end:""});
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvents() {
        setAllEvents([...allEvents, newEvent])
    }

  return (
    <>
    <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center center'
        }}>
        <Typography
            align="center"
            variant="h5"
            component="h2"
            sx={{ paddingBottom: 5 }}
        >
            Add New Event
        </Typography>
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <Input type='text' placeholder='Add Title' style={{
                textAlign:'center',
                textAlignLast: 'center'
            }}
            value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
        </Container>
        <Container sx={{
            paddingTop: 3,
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-around'
        }}>
            <Container sx={{ width: '12vh', position: 'relative', zIndex: '999'}}>
                <DatePicker placeholderText='Start Date' className='CalendarDatePicker' 
                selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
                />
            </Container>
            <Container sx={{width: '12vh', position: 'relative', zIndex: '999'}}>
                <DatePicker placeholderText='End Date' className='CalendarDatePicker'
                selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
                />
            </Container>
        </Container>
        <Button style={{marginTop: '10px'}} onClick={handleAddEvents}>Add Event</Button>
    </Container>
    <Calendar localizer={localizer} 
    events={allEvents} 
    startAccesor="start" 
    endAccessor="end"
    className='CalendarItems'
    style={{    
    height:500,  
    margin: 50,
    }}/>
    </>
  )
}

export default CalendarItem