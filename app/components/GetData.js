import React from 'react'
import getData from '../querries/getData'

export default async function GetData() {
const data = await getData();
  return (
    <div style={{textAlign: "center"}}>
    <h1>Revalidate Demo</h1>
    <p>Expecting a revalidation in 10 seconds</p>
    {
            <div>
            <i>The nnumber expected to change after update:</i>
            {" "}
            <b style={{fontSize:"22px"}}>{data[0].number}</b>
            </div>
    }
</div>
  )
}
