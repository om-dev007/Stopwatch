import React, { useState } from 'react'

const Home = () => {
    const [timer, setTimer] = useState({hours: 0, minutes: 0, seconds: 0})
    const interval = () => {
        const newTimer = setInterval(() => {
            console.log('counting');
            
            setTimer((prev) => prev.seconds+1)
        }, 1000)

        // clearInterval(newTimer)
    }

  return (
    <div className='text-center '>
        <h1 className='text-3xl font-semibold'> {String(timer.hours).padStart(2,0)}: {String(timer.minutes).padStart(2, 0)}:{String(timer.seconds).padStart(2,0)}</h1>
        <button className='bg-blue-500 px-5 py-4 rounded cursor-pointer hover:scale-95' onClick={interval}>Click</button>
    </div>
  )
}

export default Home