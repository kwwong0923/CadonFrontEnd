import React from 'react'

// CSS Module
import styles from "./CategorySelection.module.css"

const CategorySelection = () => {
  return (
    <select className="category-selection" name="category" >
        <option value="General">General</option>
        <option value="Travel">Travel</option>
        <option value="Food">Food</option>
        <option value="Game">Game</option>
        <option value="News">News</option>
        <option value="Sport">Sport</option>
        <option value="Music">Music</option>
        <option value="Other">Other</option>
      </select>
  )
}

export default CategorySelection