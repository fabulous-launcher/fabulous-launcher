const Button = (props: { text: string, icon: JSX.Element, onClick?: any, className: string }) => {
  return (
    <button onClick={props.onClick} className={`py-2 px-4 rounded inline-flex items-center ${props.className}`}>
      {props.icon} &nbsp;
      {props.text}
    </button>
  )
}

export default Button
