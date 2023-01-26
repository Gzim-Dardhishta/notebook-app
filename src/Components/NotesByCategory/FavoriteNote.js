import React from 'react'
import { useStateValue } from '../../Context/StateProvider'

const FavoriteNote = ({ id, note }) => {

  const [{favorite}, dispatch] = useStateValue();

  const removeFavorite = () => {
    dispatch({
      type: 'REMOVE_FAVORITE',
      id: id,
    })
  }
  return (
    <div>
        <small>Favorite</small>
        <p>{note}</p>

        <button onClick={() => removeFavorite()}>Remove Favorite</button>
    </div>
  )
}

export default FavoriteNote