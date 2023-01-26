import {React} from 'react'
import Notes from './Notes/Notes'
import useFetch from '../hooks/useFetch'


const Home = () => {

    const { data: allNotes, isLoading, error } = useFetch('http://localhost:8000/notes');


    return ( 
        <>
            <div className='home'>
                <div className="right">
                    <div className="notes-home">
                        { error && <div>{ error }</div> }
                        { isLoading && <div>Loading...</div> }
                        {allNotes && <Notes allNotes={allNotes}/>} 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home