import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Name() {
  return (
    <h1>Luke Anderson</h1>
  );
}

function Subtitle() {
  return (
    <h2>My most recent read:</h2>
  );
}

const recentBook = {
  title: '20 Years Later',
  author: 'Charlie Donlea',
  date: 'December 28, 2021',
  genre: 'Mystery',
  cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632079606i/57645345.jpg',
};

function DisplayBook() {
  return (
    <>
      <h3>{recentBook.title}</h3>
      <p>Author: {recentBook.author}</p>
      <p>Release Date: {recentBook.date}</p>
      <p>Genre: {recentBook.genre}</p>
      <img src={recentBook.cover} alt={recentBook.title} />
    </>
  );
}

function App() {


  return (
    <>
      <Name />
      <Subtitle />
      <DisplayBook />
    </>
  );
}

export default App
