import {useState, useEffect} from 'react'
import MobileWork from '../subComponents/MobileWork'


const WorkDisplay = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth)

    const updateMedia=()=>{
        setDesktop(window.innerWidth > 640)
    }
    useEffect(()=>{
        window.addEventListener("resize", updateMedia)
        return()=> window.removeEventListener("resize", updateMedia)
      })
  return (
   <>
   {isDesktop?(
       <h1>Bigger</h1>
   ):(
       <MobileWork/>
   )}
   </>
  )
}

export default WorkDisplay