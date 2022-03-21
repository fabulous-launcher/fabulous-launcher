import Login from './Login'

import type { IUser, IAuthenticator} from 'minecraft-launcher-core'
import { useEffect, useState } from 'react'
const { Authenticator } = window.require('minecraft-launcher-core') as { Authenticator: IAuthenticator }

const App = () => {
  const account = JSON.parse(localStorage.getItem('account')!) as IUser
  
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [error, setError] = useState<any>(null)
  
  useEffect(() => {
    if (account !== null) {
      Authenticator.validate(account.access_token, account.client_token).then((isValid: boolean | Partial<any>) => {
        if (isValid) {
          setIsValid(true)
        } else {
          setIsValid(false)
        }
      }).catch((err) => {
        setError(err)
      })
    }
  }, [account])

  if (account === null) {
    return <Login />
  }

  if (error) return <div>An Error Occured</div>
  if (isValid === null) return <div>Validating...</div>
  if (!isValid) return <div>Invalid Token</div>

  return (
    <div className='bg-slate-800 h-screen'>
      <div className='relative text-center bg-white'>
        <p className='text-4xl font-bold'>Fabulous</p>
        <div className='w-screen h-10 leading-10'>
          <div className='flex flex-row'>
            <p className='w-full'>
              <img src={`https://crafatar.com/avatars/${account.uuid}?overlay=true`} alt='your mc skin head' className='inline w-[16px] h-[16px]'></img> {account.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
