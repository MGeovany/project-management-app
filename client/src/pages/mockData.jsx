import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: '🗒️To Do',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn Javascript'
            },
            {
                id: uuidv4(),
                title: 'Learn Git'
            },
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
        ]
    },
    {
        id: uuidv4(),
        title: '✏️In Progress',
        tasks: 
        [
            {
                id:uuidv4(),
                title: 'Learn CSS'
            },
            {
                id:uuidv4(),
                title: 'Learn Angular'
            }
        ]
    },
    {
        id: uuidv4(),
        title: '✔️ Finished',
        tasks:
        [
            {
                id:uuidv4(),
                title: 'Learn React'
            },
            {
                id:uuidv4(),
                title: 'Learn Typescript'
            }
        ]
    }
]

export default mockData