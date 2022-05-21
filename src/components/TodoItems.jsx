import React,{useState} from 'react'


export default function TodoItems(props) {
  console.log("pros",props)
  const {title,handleDlt,id} = props;
  const [cls, setCls] = useState("green");
  return (
    <>
     <style>{`
        .red {background-color: gray ;border:10px solid #86fcc5}
        .green {backgraound-color: gray; border:10px solid #7f7bff}
      `
      }</style>
      <div className='outputDiv'>
      <h3>{title}</h3>
      <button  className={cls} onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}></button>

      </div>
    </>

  )
}

