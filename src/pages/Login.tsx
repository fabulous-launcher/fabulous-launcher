//import type { MojangAccount as MojangAccountType } from 'minecraft-auth';
import Button from '../components/Button';
import Division from '../components/Division';
import Input from '../components/Input';

//const { MojangAccount } = window.require('minecraft-auth');

const Login = () => {
  return (
    <div className='bg-slate-800 h-screen'>
      <div className='absolute m-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <div>
          <p className='text-white'>Mail</p>
          <input className='rounded focus:outline-none' />
        </div>
        <br />

        <div>
          <p className='text-white'>Password</p>
          <Input type='password' />
        </div>
        <br />

        <Button
          icon={
            <img src='./img/mojang-icon.svg'
              width={16}
              height={16}
              className='inline'
              alt='Mojang Icon'
            />
          }
          text='Login With Mojang'
          className='bg-red-500 hover:bg-red-700 text-white'
        />

        <Division />

        <Button
          icon={
            <img src='./img/microsoft-icon.svg'
              width={16}
              height={16}
              className='inline'
              alt='Minecraft Icon'
            />
          }
          text='Login With Microsoft'
          className='bg-white hover:bg-slate-400 text-black'
        />
      </div>
    </div>
  );
}

export default Login;
