import React from 'react'
import getData from '../querries/getData'

export default async function page() {
const data = await getData();

  return (
    <div>
        data[0].number
    </div>
  )
}
