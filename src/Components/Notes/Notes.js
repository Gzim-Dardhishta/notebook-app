import { React, useMemo, useState } from 'react';
import { useStateValue } from '../../Context/StateProvider';
import './notes.scss'
import { BsFillStarFill } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa'
import NotesCatagory from '../NotesByCategory/NotesCatagory';

const Notes = ({ allNotes }) => {

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [dispatch] = useStateValue();

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput !== '') {
      const filteredData = allNotes.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(allNotes)
    }
  }

  return (
    <div className='notes'>
      <div className="left">
        <div className="search-input">
          <input type="text" onChange={(e) => searchItems(e.target.value)} />
          <button className='search-button'>Search</button>
        </div>

        <div className="notes-catagory-home">
          <NotesCatagory />
        </div>
      </div>

      <div className='notes-list'>

        {searchInput.length >= 1 ? (
          filteredResults.map((item) => {
            return (
              <div className='note' key={item.id}>
                <div className="note-preview">
                  <p>{item.note}</p>
                </div>
                <button onClick={(e) => {
                  dispatch({
                    type: 'ADD_TO_FAVORITES',
                    item: {
                      id: item.id,
                      note: item.note
                    }
                  })
                }} className='button fav-button'><BsFillStarFill className='star' /></button>

                <button
                  onClick={(e) => {
                    dispatch({
                      type: 'ADD_TO_CODINGNOTES',
                      item: {
                        id: item.id,
                        note: item.note
                      }
                    })
                  }} className='code-button'><FaCode /></button>
              </div>
            )
          })
        ) : (
          allNotes.map((item) => {
            return (
              <div className='note' key={item.id}>
                <div className="note-preview">
                  <p>{item.note}</p>
                </div>
                <button onClick={(e) => {
                  dispatch({
                    type: 'ADD_TO_FAVORITES',
                    item: {
                      id: item.id,
                      note: item.note
                    }
                  })
                }} className='button fav-button'><BsFillStarFill className='star' /></button>

                <button
                  onClick={(e) => {
                    dispatch({
                      type: 'ADD_TO_CODINGNOTES',
                      item: {
                        id: item.id,
                        note: item.note
                      }
                    })
                  }} className='code-button'><FaCode /></button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Notes