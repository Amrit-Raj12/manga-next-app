import React, { useEffect, useState } from 'react'


const OfflinePage = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        const updateOnlineStatus = () => {
            setIsOnline(window.navigator.onLine)
        }

        window.addEventListener('online', updateOnlineStatus)
        window.addEventListener('offline', updateOnlineStatus)

        updateOnlineStatus()

        return () => {
            window.removeEventListener('online', updateOnlineStatus)
            window.removeEventListener('offline', updateOnlineStatus)
        }
    }, [])

    if(isOnline){
        return null
    }


  return (
    <>
    <div 
    className="h-screen hidden md:block bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/OfflineBg.jpg')` }}
    />
    <div 
    className="h-screen block md:hidden bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/OfflineBgMob.jpg')` }}
    />
    </>
  )
}

export default OfflinePage