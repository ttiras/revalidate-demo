"use client"

import { useState } from "react";

export default function UpdateData() {
    const [number, setNumber] = useState(null)
    const [mutationSuccessful, setSuccessful] = useState(false)

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `mutation updateRevalidateDemoData($number: Int!) {
            update_unsubers(where: {id: {_eq: 34}}, _set: {number: $number}) {
              affected_rows
            }
          }
          `,
          variables: {
            number: Number(number)
          }
        })
      };
      
      const update = async () => {
        if(number){
          const res = await fetch(
            process.env.NEXT_PUBLIC_PRODUCTS_ENDPOINT,
              options
            );
            const data = await res.json();
            if(data)setSuccessful(true)
        }
      }

  return (
    <div style={{textAlign:"center"}}>
      <p>Insert a number other than the value above and wait 10 seconds to see the change.</p>
        <input type="number" onChange={(e)=>{setNumber(e.target.value)}} />
        <button onClick={()=>update()}>Upodate</button>
        {mutationSuccessful&&<span>mutaion OK. Refresh the page after 10 seconds.</span>}
    </div>
  )
}


