const Input = (props: { id?: string, type?: string }) => {
  return (
    <input className='rounded focus:outline-none' id={props.id} type={props.type} />
  );
}

export default Input;
