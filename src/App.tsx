import './App.css';
import { MojangAccount } from 'minecraft-auth';

//const remote = window.require('@electron/remote');

function App() {
  const account = new MojangAccount()
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
