// import React, { useEffect,  useState } from 'react'

// const Home = () => {
//   const [eclapsed, setEclapsed] = useState(0)
//   const [isRunning, setIsRunning] = useState(false)
//   const [interval, setInterval] = useState(null)
//   const [startTimer, setStartTimer] = useState(0)

//   useEffect(() => {
//     return () => {
//       if(interval) clearInterval(interval)
//     }
//   }, [interval])

//   const start = () => {
//     if(isRunning) return
//     const localStart = Date.now() - eclapsed;
//     setStartTimer(localStart)
//     const id = setInterval(() => {
//       setEclapsed(Date.now()-localStart)
//     } , 50)
//     setInterval(id)
//     setIsRunning(true)
//   }

//   const stop = () => {
//     if(interval) {
//       clearInterval(interval)
//       setInterval(null)
//     }
//     setIsRunning(false)
//   }

//   const reset = () => {
//     if(interval) {
//       clearInterval(interval)
//       setInterval(null)
//     }
//     setEclapsed(0)
//     setIsRunning(false)
//     setStartTimer(0)
//   }

//   const formatTime = (ms) => {
//     const centi = Math.floor((ms % 1000)/10).toString().padStart(2,'0')
//     const seconds = Math.floor((ms/1000)%60)
//     const minutes = Math.floor(ms/60000)
//     return `${minutes.toString().padStart(2, '0')}: ${seconds.toString().padStart(2, '0')}: ${centi}`
//   }

//   return (
//     <div>
//       <h1> timer = {formatTime(eclapsed)} </h1>
//       <button onClick={isRunning? stop: start} className='bg-blue-600 text-cyan-50 px-5 py-2 rounded-2xl'>{isRunning? 'stop': 'start'} </button>
//       <button onClick={reset} className='bg-blue-600 text-cyan-50 px-5 py-2 rounded-2xl'>Reset</button>
//     </div>
//   )
// }

// export default Home 

import React, { useEffect, useState } from 'react'
const Home = () =>  {
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)
  const [startTime, setStartTime] = useState(0)

  useEffect(() => {
    // cleanup on unmount
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [intervalId])

  const start = () => {
    if (running) return
    const localStart = Date.now() - elapsed          // compute local start
    setStartTime(localStart)                         // store if you want
    const id = setInterval(() => {
      setElapsed(Date.now() - localStart)            // use localStart to avoid stale closure
    }, 50)
    setIntervalId(id)
    setRunning(true)
  }

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
    setRunning(false)
  }

  const reset = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
    setElapsed(0)
    setRunning(false)
    setStartTime(0)
  }

  const formatTime = (ms) => {
    const centis = Math.floor((ms % 1000) / 10).toString().padStart(2, '0')
    const seconds = Math.floor(ms / 1000) % 60
    const minutes = Math.floor(ms / 60000)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centis}`
  }

  return (
    <div className='p-6'>
      <h1 className='text-center text-2xl bg-gray-950 text-white px-5 py-4'>
        timer = {formatTime(elapsed)}
      </h1>

      <div className='flex gap-4 justify-center mt-4'>
        <button
          className='bg-blue-500 text-white px-5 py-3 rounded'
          onClick={running ? stop : start}
        >
          {running ? 'Stop' : 'Start'}
        </button>

        <button
          className='bg-gray-700 text-white px-5 py-3 rounded'
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
