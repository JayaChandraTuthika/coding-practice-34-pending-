import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList, changeCategory} = props
  const {categoryId, name} = categoryOptions
  const {ratingId, imageUrl} = ratingsList

  const onchangeCategory = id => {
    // changeCategory(id)
  }

  return (
    <div className="filters-group-container">
      <div className="search-title-container">
        <input type="search" className="search-title-input" />
        <button className="search-button" type="button">
          <BsSearch className="search-icon" />
        </button>
      </div>
      <p className="category-heading">Category</p>
      <ul className="category-list-container">
        {categoryOptions.map(category => (
          <li key={category.categoryId}>
            <button
              type="button"
              onClick={onchangeCategory(category.categoryId)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FiltersGroup
