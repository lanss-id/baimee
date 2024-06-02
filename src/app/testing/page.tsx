'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const Testing = () => {
  const [text, setText] = useState('black')
  const [color, setColor] = useState('black')

  const handleInputChange = (e: any) => {
    setText(e.target.value)
  }

  const handleButtonClick = () => {
    setColor(text)
  }

  return (
    <section className='-mt-8 flex h-dvh flex-col justify-center'>
      <div>
        <h2 className='text-xl' style={{ color: color, transition: '0.2s ease-in-out' }}>
          This text will be change by your color input with
          <kbd className='ml-2 font-bold'>useState()</kbd>
        </h2>
      </div>
      <br />
      <div className='flex gap-2'>
        <Input
          type='text'
          value={text}
          color={color}
          placeholder='Input color to change text above'
          onChange={handleInputChange}
        />
        <Button onClick={handleButtonClick}>Change</Button>
      </div>
    </section>
  )
}

export default Testing
