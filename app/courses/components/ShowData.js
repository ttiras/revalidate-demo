import React from 'react'

function ShowData({products}) {
  return (
    <div>
        <h1>Show data</h1>
                    {products&&<b style={{fontSize:"22px"}}>{products[0].dates[0].seats}</b>}

    </div>
  )
}

export default ShowData