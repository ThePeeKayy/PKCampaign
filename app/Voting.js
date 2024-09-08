import React from 'react'
import Image from 'next/image'
import img3 from './img3.jpeg'
const Voting = () => {
  return (
    <div className='flex flex-col items-center gap-y-4 p-8'>
      <h2 className='px-16 py-2 text-4xl font-bold mt-[100px]'>Voting begins from 15th to 17th September🗳️</h2>
      <p className='px-16'>Thanks for viewing my visions and goals! <strong>Your vote truly matters</strong>. Lets make a difference together!</p>
      <Image alt='' className='rounded-lg' src={img3} width={570} height={570} />
    </div>
  )
}

export default Voting