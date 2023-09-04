const Book = (props) => {
  const { img, author, title, getBook, id,number } = props
  console.log(number);
  // console.log(props)
  // const displayTitle=()=>{
  //   console.log(title)
  // }
  // const getSingleBook=()=>{
  //   getBook(id)
  // }
  return (
    <article className="book">
      <img src={img} alt="{title}" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className='number'>{`#${number+1}`}</span>
      {/* <p>{6+6}</p> */}
    </article>
  )
}

export default Book
