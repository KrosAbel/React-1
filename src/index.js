import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {books} from './books'
import Book from './Book'
// function Greeting(){
//     return <React.Fragment>
//         <Person/>
//         <Message/>
//     </React.Fragment>
//}
// const Greeting= ()=>{
//     return React.createElement('h2',{},'Hello World')
// }
// const Greeting=()=>{
//     return React.createElement('div',{},
//    React.createElement('h2',{},'Hello World')
//     )
// }
// const Person=()=><h1>Hello People</h1>
// const Message=()=>{
//     return <p>Hello Nesting components</p>
// }

// const names=['John','Peter','Susan']
// const newNames=names.map((name)=>{
// return <h3>{name}</h3>
// })

const BookList = () => {
  // const someValue = 'shakeAndBake'
  // const displayValue = () => {
  //   console.log(someValue)
  // }
  const getBook = (id) => {
    const book = books.find((book) =>book.id === id)      
    console.log(book)
  }
  return (
    <><h1>Amazon best sellers</h1>
      <section className="booklist">
        {/* <EventExamples /> */}
        {books.map((book, index) => {
          // const {img,title,author,id}=book
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          )
        })}
      </section>
    </>
  )
}
// const EventExamples = () => {
//   const handleFormInput=(e)=>{
//     console.log(e.target)
//     console.log(e.target.name)
//     console.log(e.target.value)
//   }
//   const handleButtonClick=()=>{
//     alert('Handle button click')

//   }
//   const handleFormSubmission=(e)=>{
//     e.preventDefault();
//     console.log('Form submitted')

//   }
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h1>Typical Form</h1>
//         <input type="text" name='example' onChange={handleFormInput} style={{ margin: '1rem 0' }}></input>
//       </form><button onClick={handleButtonClick}>Click me</button>
//     </section>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
