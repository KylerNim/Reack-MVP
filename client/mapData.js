const mapData = {
    
    // Locations //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    pod: {
        // Wakes up in pod in a dark room
        detail2: [
            'You wake up.',
            'Outside of the broken pod you were sleeping in you can barely make out the dark room around you.',
            'The broken glass looks sharp, lets be careful not to cut oursleves',
            '--',
            '[type "exit pod" or just "exit"]'
        ],
        rooms: {exit: 'startingRoom'}
    },
    startingRoom: {
        // gets out of pod, lights come on, and they can now inspec the room, they might be able to open the hallway but ill leave it open for now
        // might add stuff to desk, perhaps Item for healing tutorial/demo. (will need data for items and observations)
        detail1: [
            'As you carefully crawl out of the pod, the lights in the room flicker on dimly',
            'as if the room, itself, was waiting for you.',
            'How strange, do you know this place?'
        ],
        detail2: [
            'The room is dimly lit, you can see a confusing control panel in the middle, with switches and flashing lights.',
            'Behind it lies a familiar pod, with identical devices on either side. There is what looks like an office desk to the left, and a dark hallway to the right.'
        ],
        rooms: { right: 'hallway1' }
    },
    hallway1: {
        // steps into hark hallway, they can see the janitors closet lit up on the right, and lit dimly lit office room on left (might chage office desks to here).
        // hallway is only lighted by the light spilling out from the other rooms
        // The darkness seems to get deeper down the hall
        detail1: [
            'this is the initial text'
        ],
        detail2: [
            'you are in the hallway', 
            'there is a room to your right', 
            'and one to your left', 
            'as well as the dark hallway with no end in sight'
        ],
        rooms: { left:'office', forward:'hallway2', right:'closet' },
        previous: 'startingRoom'
    },
    office: {
        // dimly lit office, filled with desks/chairs/computers.. Perhaps can use the one powered computer for some reason
        detail1: [
            'you are in the office'
        ],
        previous: 'hallway1'
    },
    closet: {
        // Janitors closet, might have an item or maybe something creepy // not important? MIGHT EVEN REMOVE THIS ROOM
        detail1: [
            'you are in the janitors closet'
        ],
        previous: 'hallway1'
    },
    hallway2: {
        // its even darker here, the hall splits into 2 (right and straight). To the right you can see light at the distant end, which gives the player hope.
        // looking forward, deeper into the hall, the darkness makes it impossible to tell how far it goes. (DANGER//possible death)
        detail1: [
            'this is hallway 2'
        ],
        rooms: {forward: 'deadEnd', right: 'cafeteria'},
        previous: 'hallway1'
    },
    deadEnd: {
        // you should probably die here, there is no return (probably)
        detail1: [
            'this is the DEAD end'
        ],
    },
    // Not sure how ill do hallway3, kind of want a chase or smthn. will lead to [insert here].. might have a weakened state affect the outcome depending on the healing item earlier
    // long hallway filled with dark rooms on either side
    cafeteria: {
        // main/end part of the tutorial??
        // may be trapped in here, there is a blocked/boarded/locked door (tutorial exit), and a kitchedn entrance.
        // there will be blook or something similar indicating that the kitchen is not a good place, the rest of the cafeteria shouldnt look nice either (bad nasty)
        detail1: [
            'this is apparently a cafeteria'
        ],
        rooms: {left: 'kitchen', forward: 'tutorial exit'}
    },

    
    
    // Inspect Results ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    controlPanel: {
        detail1: [''],
        containedIn: 'startingRoom',
    },
}

export default mapData;