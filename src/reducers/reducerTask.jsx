const tasks=[
    {
        'header':'Send benefit review by Sunday',
        'date':'December 23, 2018',
        'type':'Reminder',
        'name':'George Fields',
        'status':'Completed'
    },
    {
        'header':'Invite to office meet-up',
        'date':'December 23, 2018',
        'type':'Call',
        'name':'Rebecca Moore',
        'status':'Ended'
    },
    {
        'header':'Office meet-up',
        'date':'December 23, 2018',
        'type':'Event',
        'name':'Lindsey Stroud',
        'status':'Completed'
    }
]

export function reducerTask(state = tasks, action){
    switch (action.type) {
        case 'INIT_APP':
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}