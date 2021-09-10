import React from 'react'
import Book from '../Book'

const SearchResults = ({ searchBooks, myBooks, onMove }) => {

  const renderedBooks = searchBooks.map(book => {
    const myBook = myBooks.find(b => b.id === book.id)
    book.shelf = myBook ? myBook.shelf : 'none'
    return (
      <Book 
        key={book.id}
        book={book}
        shelf={book.shelf}
        onMove={onMove}
      />
    )
  })
  
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {renderedBooks}
      </ol>
    </div>
  )
}

export default SearchResults
