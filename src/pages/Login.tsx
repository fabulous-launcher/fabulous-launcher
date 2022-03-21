import { useRef } from 'react'
import ReactDOM from 'react-dom'

import Button from '../components/Button'
import Division from '../components/Division'
import Input from '../components/Input'
import App from './App'

import type { IpcRenderer } from 'electron'
import type { mclcUser as MCLCUser } from 'msmc'

const { Authenticator } = window.require('minecraft-launcher-core')
const { ipcRenderer } = window.require('electron') as { ipcRenderer: IpcRenderer }

const Login = () => {
  const emailInput = useRef<HTMLInputElement>(null)
  const pwInput = useRef<HTMLInputElement>(null)

  const renderApp = () => ReactDOM.render(<App />, document.getElementById('root'))

  const handleMojangLogin = async () => {
    const email = emailInput.current?.value
    const pw = pwInput.current?.value
    
    localStorage.setItem('accType', 'mojang')
    const auth = await Authenticator.getAuth(email, pw)

    if (!auth) return

    localStorage.setItem('account', JSON.stringify(auth))
    renderApp()
  }

  const handleMicrosoftLogin = () => {
    ipcRenderer.invoke('mslogin').then((user: MCLCUser) => {
      localStorage.setItem('accType', 'microsoft')
      localStorage.setItem('account', JSON.stringify(user))
      renderApp()
    })
  }

  return (
    <div className='bg-slate-800 h-screen'>
      <div className='absolute m-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <div>
          <p className='text-white'>Mail</p>
          <Input innerRef={emailInput} />
        </div>
        <br />

        <div>
          <p className='text-white'>Password</p>
          <Input type='password' innerRef={pwInput} />
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
          onClick={handleMojangLogin}
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
          onClick={handleMicrosoftLogin}
          text='Login With Microsoft'
          className='bg-white hover:bg-slate-400 text-black'
        />
      </div>
    </div>
  )
}

export default Login
