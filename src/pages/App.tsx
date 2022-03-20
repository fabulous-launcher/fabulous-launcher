import ReactDOM from 'react-dom'
import Login from './Login'
import { useEffect } from 'react'

import type { IUser } from 'minecraft-launcher-core'

const App = () => {
  if (localStorage.getItem('account') === null) {
    return <Login />
  }

  const account = JSON.parse(localStorage.getItem('account')!) as IUser

  return (
    <div className='bg-slate-800 h-screen'>
      <div className='relative text-center bg-white'>
        <p className='text-4xl font-bold'>Fabulous</p>
        <div className='w-screen h-10 leading-10'>
          <div className='flex flex-row'>
            <p className='w-full'>
              <img src={`https://crafatar.com/avatars/${account.uuid}`} className='inline w-[16px] h-[16px]'></img> {account.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
