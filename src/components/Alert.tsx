import { ReactNode } from 'react'

type AlertProps = {
    children: ReactNode
}

export const Alert = ({ children }: AlertProps) => {
    return (
        <div className='text-center mb-8 uppercase font-black text-3xl'>
            {children}
        </div>
    )
}
