const Greeting = ({name, title, children}) => {
  return (
    <>
      <p>{children} {name}</p>
    </>
  )
}

export default Greeting
