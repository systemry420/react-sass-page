import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSquare, faBook, faCalendar,
    faList, faTv, faPlay, faArrowUp
 } from '@fortawesome/free-solid-svg-icons'

export const links = [
    {
        text: 'Discover', 
        icon: <FontAwesomeIcon icon={faSquare} />
    },
    {
        text: 'Categories', 
        icon: <FontAwesomeIcon icon={faBook} />
    },
    {
        text: 'Events', 
        icon: <FontAwesomeIcon icon={faCalendar} />
    },
    {
        text: 'Playlists', 
        icon: <FontAwesomeIcon icon={faList} />
    },
    {
        text: 'Channel', 
        icon: <FontAwesomeIcon icon={faTv} />
    },
    {
        text: 'Continue Watching', 
        icon: <FontAwesomeIcon icon={faPlay} />
    },
    {
        text: 'Vote Now', 
        icon: <FontAwesomeIcon icon={faArrowUp} />
    }
] 