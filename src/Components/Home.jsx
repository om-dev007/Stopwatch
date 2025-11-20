import React, { useEffect, useState } from 'react'
const Home = () =>  {
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)
  const [startTime, setStartTime] = useState(0)

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [intervalId])

  const start = () => {
    if (running) return
    const localStart = Date.now() - elapsed          
    setStartTime(localStart)                         
    const id = setInterval(() => {
      setElapsed(Date.now() - localStart)            
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
    <div className='p-6 '>
      <div className='flex justify-center'>
        <h1 className='text-center text-2xl rounded-2xl bg-gray-950 w-1/2 text-white px-8 py-8'>
        Timer = {formatTime(elapsed)}
      </h1>
      </div>

      <div className='flex gap-4 justify-center mt-4'>
        <button
          className='bg-blue-500 hover:scale-95  transition-all cursor-pointer text-white px-5 py-3 rounded'
          onClick={running ? stop : start}
        >
          {running ? 'Stop' : 'Start'}
        </button>

        <button
          className='bg-gray-700 hover:scale-95 transition-all cursor-pointer text-white px-5 py-3 rounded'
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Home