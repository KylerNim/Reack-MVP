const mapData = {
    startingRoom: {
        detail: 'This is the detail text for the starting room, there is a hallway in front of you',
        rooms: { right: 'hallway1' }
    },
    hallway1: {
        detail: 'you are in the hallway, there is a room to your right, and one to your left, as well as the dark hallway with no end in sight',
        rooms: { left:'office', forward:'hallway2', right:'closet' },
        previous: 'startingRoom'
    },
    office: {
        detail: 'you are in the office',
        previous: 'hallway1'
    },
    closet: {
        detail: 'you are in the janitors closet',
        previous: 'hallway1'
    },
    hallway2: {
        detail: 'Wow, its just a dead end',
        previous: 'hallway1'
    }
}

export default mapData;