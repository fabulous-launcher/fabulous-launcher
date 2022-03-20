import { MutableRefObject, Ref } from 'react';

const Input = (props: { id?: string, type?: string, innerRef?: MutableRefObject<any> }) => {
  return (
    <input className='rounded focus:outline-none' id={props.id} type={props.type} ref={props.innerRef} />
  );
}

export default Input;
