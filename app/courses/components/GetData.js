import React from 'react'
import getData from '../../querries/getData'
import ShowData from './ShowData';

export default async function GetData() {
const data = await getData();

console.log(data)
const products = data?.products  
return (
    <div style={{textAlign: "center"}}>
    <h1>Revalidate Demo</h1>
    <p>Expecting a revalidation in 10 seconds</p>
    {
            <div>
              <br></br>
            <i>The initial number:</i><b> 79</b>
            <br></br>
            <br></br>
            The number is updated at the databease after this build, and if below number is same as the initial number above, revalidation does not work.
            <br></br>
            <br></br>
            {" "}
            <ShowData products={products} />
              </div>
    }
</div>
  )
}
