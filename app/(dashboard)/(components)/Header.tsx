import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

export const Header = ({title, description, children}: {title: string, description: string, children: React.ReactNode}) => {
  return (
    <>       
     <div className="w-full flex justify-between items-center mb-10">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-slate-800">{title}</h2>
          <p className="text-sm text-slate-600 max-w-[400px]">
            {description}
          </p>
        </div>
        <div className="flex gap-2">
            <Button>
                <Plus size={16} /> <div className='hidden lg:block'>New {title}</div>
            </Button>
            {children}
        </div>
      </div>

    </>
  )
}
