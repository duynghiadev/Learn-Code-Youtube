import React, { ReactNode } from 'react'

export interface JobProps {
  title: string
  icon: ReactNode
  bgClass: string
}

export const Job: React.FC<JobProps> = ({ title, icon, bgClass: bgColor }) => {
  return (
    <div
      className={`${bgColor} p-4 flex flex-col items-center justify-center aspect-square rounded-lg`}
    >
      {icon}
      <p className='pt-2 font-popi'>{title}</p>
    </div>
  )
}
