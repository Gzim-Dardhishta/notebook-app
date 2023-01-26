import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import FavoriteNote from './FavoriteNote';
import NotesCatagory from './NotesCatagory';


const FavoritesPage = () => {

  const [{ favorites }] = useStateValue();

  return (
    <div>
      <div className='home'>
        <div className="left">
          <div className="notes-catagory-home">
            <NotesCatagory />
          </div>
        </div>

        <div className="right">
          <h1>Favorites page</h1>
          <div className="favorite-notes">
            {favorites.map(item => (
              <div key={item.id}>
                <FavoriteNote id={item.id} note={item.note} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoritesPage