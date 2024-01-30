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
            // 'How strange, do you know this place?'
            '--',
        ],
        detail2: [
            'The room is dimly lit, you can see a confusing control panel in the middle, with switches and flashing lights.',
            'Behind it lies a familiar pod, with identical devices on either side.', 
            'There is what looks like an office desk to the left, and a dark hallway to the right.'
        ],
        rooms: { right: 'hallway1' },
        inspect: {
            /*Desk*/ 
            desk: 'desk', 
            table: 'desk', 
            /*Control Panel*/ 
            panel: 'controlPanel', 
            control: 'controlPanel', 
            controls: 'controlPanel', 
            switch: 'controlPanel', 
            buttons: 'controlPanel',
            /* Left Pod */
            left: 'leftPod',
            /* Right Pod */
            right: 'rightPod',
        },
    },
    hallway1: {
        // steps into hark hallway, they can see the janitors closet lit up on the right, and lit dimly lit office room on left (might chage office desks to here).
        // hallway is only lighted by the light spilling out from the other rooms
        // The darkness seems to get deeper down the hall
        detail1: [
            'You leave the comfort of the dimly lit lab',
            '--'
        ],
        detail2: [
            'you are in a hallway, the only light coming from the rooms that line it.', 
            'there is what looks like a closet to your right, light flickering, as if it were trying to draw you closer', 
            'a door on the left that doesnt provide any additional light', 
            'as well as the dark hallway ahead of you with no end in sight'
        ],
        rooms: { left:'office1', forward:'hallway2', right:'closet' },
        previous: 'startingRoom'
    },
    office1: {
        // dimly lit office, filled with desks/chairs/computers.. Perhaps can use the one powered computer for some reason
        detail1: [
            'Peering into the dark room, you can barely make out desks and computers.',
            'Just a dead office.',
            '--',
        ],
        detail2: [
            'It\'s too dark, lets move on.',
        ],
        previous: 'hallway1'
    },
    closet: {
        // Janitors closet, might have an item or maybe something creepy // not important? MIGHT EVEN REMOVE THIS ROOM
        detail1: [
            'You let the light guide you in, hoping that there is some meaning to its flashing',
            'maybe its trying to help you?',
            '--',
        ],
        detail2: [
            'Its a mostly normal janitors closet',
            'You can spot a glint coming from the left shelving, but what really catches your attention',
            'is the hole in the back wall.',
            'You feel discomfort at the sight of it, but it\'s happy to see you.'
        ],
        inspect: {/* Shelf */ shelf: 'janitorsShelf', shelves: 'janitorsShelf',/* Hole */ hole: 'hole'},
        previous: 'hallway1'
    },
    hallway2: {
        // its even darker here, the hall splits into 2 (right and straight). To the right you can see light at the distant end, which gives the player hope.
        // looking forward, deeper into the hall, the darkness makes it impossible to tell how far it goes. (DANGER//possible death)
        detail1: [
            'Venturing deeper into the hallway, the darkness seems to get deeper',
            'and the hallway before you splits in two.',
            '--',
        ],
        detail2: [
            'On the left is a [office 2, make decisions]',
            'On the right, you can see a bright light at the end of the incredible stretch of hallway, it gives you hope.',
            'Ahead of you is still the same never ending darkness, but you can hear a low scraping',
            'You don\'t feel safe.'
        ],
        rooms: {forward: 'deadEnd', right: 'run1'},
        previous: 'hallway1'
    },
    office2: {
        // dimly lit office, filled with desks/chairs/computers.. Perhaps can use the one powered computer for some reason
        detail1: [
            'office2',
            '--',
        ],
        detail2: [
            'make decisions',
        ],
        previous: 'hallway1'
    },
    deadEnd: {
        // you should probably die here, there is no return (probably)
        detail2: [
            //stuck here til you load
        ],
    },
    // Not sure how ill do hallway3, kind of want a chase or smthn. will lead to [insert here].. might have a weakened state affect the outcome depending on the healing item earlier
    // long hallway filled with dark rooms on either side
    cafeteria: {
        // main/end part of the tutorial??
        // may be trapped in here, there is a blocked/boarded/locked door (tutorial exit), and a kitchedn entrance.
        // there will be blook or something similar indicating that the kitchen is not a good place, the rest of the cafeteria shouldnt look nice either (bad nasty)
        detail1: [
            'The brightness of the light engulfs you, as you find yourself in a well-lit Cafeteria',
            'It hates the light, it won\'t follow you here',
            'You are safe, for now',
            '--',
        ],
        detail2: [
            'The Cafeteria before you, is an absolute mess, tables and chairs are strewn everywhere.',
            'You can spot what looks like, perhaps human, vicsera on the floor and tables',
            'Whatever did this doesnt seem to be around anymore',
            'There are double doors in front of you that appear to be chain-locked, and a kitchen entrance to the left'

        ],
        rooms: {left: 'kitchen', forward: 'tutorialExit'}
    },
    kitchen: {
        // wanna add some kind of struggle/scary/battle/smthn, but for now just keyCard
        previous: 'cafeteria',
    },
    tutorialExit: {
        // ends the tutorial, is electrically locked
        locked: 'this door is locked',
        previous: 'cafeteria',
    },

    
    // Hallway Escape ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    run1: {
        detail2: [
            'You start walking down the long hallway',
            'You can feel it behind you now',
            'The scraping getting louder',
            '--',
            '[KEEP MOVING FORWARD]'
        ],
        rooms: {forward: 'run2'},
        previous: 'death2',
    },
    run2: {
        detail2: [
            'You\'re running now',
            'but the thing behind you is running as well',
            'It wants you',
            '--',
            '[DONT STOP]'
        ],
        rooms: {forward: 'run3'},
        previous: 'death2',
    },
    run3: {
        detail2: [
            'You are moving as quickly as you can',
            'the adrenaline and fear keep you from feeling the exhaustion',
            'the light at the end of the hall is your salvation.',
            '--',
            '[KEEP MOVING]'
        ],
        rooms: {forward: 'run4'},
        previous: 'death2',
    },
    run4: {
        detail2: [
            'The sound of scraping is now deafening, in your ears',
            'you are sure it is right behind you now',
            'it\'s claws inches from your back',
            '--',
            '[YOU ARE GOING TO DIE]'
        ],
        rooms: {forward: 'cafeteria'},
        previous: 'death2',
    },

    // Inspect Results ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // startingRoom //////////////////////////////////
    desk: {
        itemKey: 'desk key',
        detail1: [
            
        ],
        detail2: [
            'Looking closer at the desk',
            'There are papers and documents strewn across the desk.',
            'Test filled with various colored liquid, left unsealed, all seem to be growing mold.',
            'There is a drawer, sealed with a key-lock.'
        ],
        detail3: [
            '--',
            'You unlock the drawer using the Desk Key.',
            'Inside the desk you find what appears to be medicine!',
            'Although you don\'t recognize the brand...'
        ],
        item: 'medicine',
        previous: 'startingRoom',
    },
    controlPanel: {
        detail1: [
            ''
        ],
        detail2: [
            'The panel is covered with switches, levers, buttons',
            'and all sorts of flashing colored lights.',
            'You have absolutely no idea what any of it means.',
            'Probably best left alone.',
            '--',
            '[return]'
        ],
        previous: 'startingRoom',
    },
    leftPod: {
        // similar to your pod, but whatever was in it has been gone for a long time.
        detail1: [
            ''
        ],
        detail2: [
            'Looks the same as the pod you came out of',
            'but whatever was inside of it has probably been gone for a long time.',
            '--',
            '[return]'
        ],
        previous: 'startingRoom',
    },
    rightPod: {
        // you swear you saw something brush across the dark glass but, even squinting your eyes, seeing what lies beneath its surface proves too difficult.
        detail1: [
            ''
        ],
        detail2: [
            'Looking closely at the pod, you swear you see saw something brush across the dark glass',
            'but, no matter how hard you squint your eyes, seeing what lies beneath',
            'proves too difficult.',
            '--',
            '[return]'
        ],
        previous: 'startingRoom',
    },

    // Janitors Closet //////////////////////////////
    janitorsShelf: {
        itemKey: 'pet',
        detail1: [
            'Looking more closely at the shelf you find a small key ring, labeled "Desk Keys"',
            '--'
        ],
        detail2: [
            'Other than the key, the desk is just filled with tools and cleaning products.',
            'It doesn\'t seem as though the Janitor has been around in a while.',
            '--',
            '[return]'
        ],
        item: 'desk key',
        previous: 'closet'
    },


    // Items /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    pet: {
        name: 'Pet Rock',
        detail2: [
            'Isn\'t he cute\?',
            'What should I call him...?',
            '--',
            '[It makes you feel better]'
        ]
    },
    medicine: {
        name: 'Medicine',
        detail2: 'its medicine',
        value: 50,
    },
}

export default mapData;