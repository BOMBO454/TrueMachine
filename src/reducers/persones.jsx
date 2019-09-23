const body = [
    {
        'image':'persone.png',
        'Name':'Lindsey Stroud',
        'Email':'lindsey.stroud@gmail.com',
        'CompanyName':'Hatchbuck',
        'Role':'Manager',
        'Forecast':'50 %',
        'RecentActivity':'5 Minutes ago',
    },
    {
        'image':'persone.png',
        'Name':'Lindsey Stroud',
        'Email':'lindsey.stroud@gmail.com',
        'CompanyName':'Hatchbuck',
        'Role':'Manager',
        'Forecast':'50 %',
        'RecentActivity':'5 Minutes ago',
    },
    {
        'image':'persone.png',
        'Name':'Lindsey Stroud',
        'Email':'lindsey.stroud@gmail.com',
        'CompanyName':'Hatchbuck',
        'Role':'Manager',
        'Forecast':'50 %',
        'RecentActivity':'5 Minutes ago',
    },
    {
        'image':'persone.png',
        'Name':'Lindsey Stroud',
        'Email':'lindsey.stroud@gmail.com',
        'CompanyName':'Hatchbuck',
        'Role':'Manager',
        'Forecast':'50 %',
        'RecentActivity':'5 Minutes ago',
    },
    {
        'image':'persone.png',
        'Name':'Lindsey Stroud',
        'Email':'lindsey.stroud@gmail.com',
        'CompanyName':'Hatchbuck',
        'Role':'Manager',
        'Forecast':'50 %',
        'RecentActivity':'5 Minutes ago',
    },
]

export function persones(state = body, action){
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

