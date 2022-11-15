import React from 'react'
import '../styles/PanelStyle.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from './mockData'
import { useState } from 'react'
import CardKanban from '../card/card'
import { 
    Container, 
    Title
    } from '@mantine/core'

const PanelKanban = () => {
    const [data, setData] = useState(mockData)

    const onDragEnd = result => {
        if (!result.destination) return
        const {source, destination} = result

        if(source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)

            data[sourceColIndex].tasks = sourceTask
            data[destinationColIndex].tasks = destinationTask

            setData(data)
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container className="panel">
                {
                    data.map(section => (
                        <Droppable
                            key={section.id}
                            droppableId={section.id}
                        >
                            {(provided) => (
                                <Container
                                    {...provided.droppableProps}
                                    className='panel__section'
                                    ref={provided.innerRef}
                                >
                                    <Title className="panel__section__title">
                                        {section.title}
                                    </Title>
                                    <Container className="panel__section__content">
                                        {
                                        section.tasks.map((tasks, index) => (
                                            <Draggable
                                                key={tasks.id}
                                                draggableId={tasks.id}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <Container
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style,
                                                        opacity: snapshot.isDragging ? '0.5' 
                                                        : '1'
                                                    }}
                                                    >
                                                        <CardKanban>
                                                            {tasks.title}
                                                        </CardKanban>
                                                    </Container>
                                                )}
                                            </Draggable>
                                        ))    
                                    }
                                    {provided.placeholder}
                                    </Container>
                                </Container>
                            )}
                        </Droppable>
                    ))
                }
            </Container>
        </DragDropContext>
    )
}

export default PanelKanban