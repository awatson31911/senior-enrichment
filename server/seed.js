const db = require('./server/db')

const User = db.model('Campus');
const Campus = db.model('Campus');


const Campuses = [
    {
        name: 'Boyskout U',
        imageUrl: 'poop'
    },
    {
        name: 'Boy Wonder U',
        imageUrl: 'alsopoo'
    },
    {
        name: 'LadySpectacular',
        imageUrl: 'notpoop'
    }
]

const users = [
    {
        name: 'Johnny Tsunami',
        email: 'jt12@netscape.com'
    }, {
        name: 'Johnny Bravo',
        email: 'jb12@netscape.com'
    }, {
        name: 'Johnny Neutron',
        email: 'jn12@netscape.com'
    }, {
        name: 'Johnny Salami',
        email: 'js12@netscape.com'
    }
]



