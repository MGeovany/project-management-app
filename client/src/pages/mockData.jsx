import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: '🗒️Por Hacer',
        tasks: [
            {
                id: uuidv4(),
                title: 'Aprender Javascript'
            },
            {
                id: uuidv4(),
                title: 'Aprender Git'
            },
            {
                id: uuidv4(),
                title: 'Aprender Python'
            },
        ]
    },
    {
        id: uuidv4(),
        title: '✏️En Progreso',
        tasks: 
        [
            {
                id:uuidv4(),
                title: 'Aprender CSS'
            },
            {
                id:uuidv4(),
                title: 'Aprender Angular'
            }
        ]
    },
    {
        id: uuidv4(),
        title: '✔️ Terminado',
        tasks:
        [
            {
                id:uuidv4(),
                title: 'Aprender React'
            },
            {
                id:uuidv4(),
                title: 'Aprender Typescript'
            }
        ]
    }
]

export default mockData