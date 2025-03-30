import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bookCover from 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632079606i/57645345.jpg'
import viteLogo from '/vite.svg'
import './App.css'


const recentBook = {
  title: '20 Years Later',
  author: 'Charlie Donlea',
  date: 'December 28, 2021',
  genre: 'Mystery',
  cover: bookCover
};

function BookTitle() {
  return (
    <h3>{recentBook.title}</h3>
  );
}

function DisplayBook() {
  return (
    <>
      <h3>{recentBook.title}</h3>
      <p>{recentBook.author}</p>
      <p>{recentBook.date}</p>
      <p>{recentBook.genre}</p>
      <img src="bookCover" alt="{recentBook.title}" />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookTitle />
      <DisplayBook />
    </>
  )
}

export default App
