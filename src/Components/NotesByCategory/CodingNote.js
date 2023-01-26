import React from 'react'
import { useStateValue } from '../../Context/StateProvider';
import '../Notes/notes.scss'
import {TiDelete} from 'react-icons/ti'

const CodingNote = ({ id, note }) => {

    const [dispatch] = useStateValue();

    const removeNote = () => {
        dispatch({
          type: 'REMOVE_CODINGNOTE',
          id: id,
        })
      }

    return (
        <div>
            <small>Coding Note</small>
            <p>{note}</p>

            <button
                onClick={(e) => removeNote()}
            className='remove-button'><TiDelete/></button>
        </div>
    )
}

export default CodingNote