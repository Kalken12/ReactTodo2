import React from 'react'

const [task, setTask] = useState("")

export default function Demo() {
 const  handleChange=(el)=>{
     setTask()


 }


  return (
<>
<input type="text" onChange={handleChange} />
</>
  )
}
