import React from 'react'

const Props = ({change}) => {
  return (
    <div>
        <button className='px-3 py-1 rounded-md bg-blue-400 text-lg text-white m-2'>{change>20 ? 'Legal Age' : 'Underage'}</button>
    </div>
  )
}

export default Props