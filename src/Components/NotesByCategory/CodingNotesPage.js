import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import NotesCatagory from './NotesCatagory';
import CodingNote from './CodingNote';

const CodingNotesPage = () => {
    const [{ codingNotes }] = useStateValue();
    return (
        <div>
            <div className='home'>
                <div className="left">

                    <div className="notes-catagory-home">
                        <NotesCatagory />
                    </div>
                </div>

                <div className="right">
                    <h1>Coding Notes page</h1>
                    <div className="coding-notes">
                        {codingNotes.map(item => (
                            <div key={item.id}>
                                <CodingNote id={item.id} note={item.note} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodingNotesPage