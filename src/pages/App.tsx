import ReactDOM from 'react-dom';
import Login from './Login';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      ReactDOM.render(<Login />, document.getElementById('root'))
    }
  })
  return (
    <div className='bg-slate-800 h-screen'>
      <div className='relative text-center bg-white'>
        <p className='text-4xl font-bold'>Fabulous</p>
        <div className='w-screen h-10 leading-10'>
          <div className='flex flex-row'>
            <p className='w-full'>h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
