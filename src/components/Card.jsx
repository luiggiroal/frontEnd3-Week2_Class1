const Card = ({title, text, children}) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}

export const Button = ({msg}) => {
  return (
    <>
      <button>{msg}</button>
    </>
  )
}

export default Card
