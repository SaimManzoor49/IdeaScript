'use client'
import React, { useState } from 'react'
import { Doc } from '../../../../convex/_generated/dataModel'

import {
    PopoverTrigger,Popover,PopoverContent
} from '@/components/ui/popover'
import { useOrigin } from '../../../../hooks/use-origin'
import { useMutation } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

interface IPublishProps{
    initialData:Doc<'documents'>
}

export default function Publish({initialData}:IPublishProps) {

    const origin = useOrigin()
    const updata = useMutation(api.documents.update)
    const [copied,setCopied] = useState(false)
    const [isSubmiting,setIsSubmitting] = useState(false)


    const url = `${origin}/preview/${initialData._id}`


    const onPublish =()=>{
        setIsSubmitting(true)


        const promise = updata({
            id:initialData._id,
            isPublished:true,
        }).finally(()=>{
            setIsSubmitting(false)
        })


        toast.promise(promise,{
            loading:"Publishing...",
            success:"Note published!",
            error:"Failed to publish note.",
        })
    }

    const onUnPublish =()=>{
        setIsSubmitting(true)


        const promise = updata({
            id:initialData._id,
            isPublished:false,
        }).finally(()=>{
            setIsSubmitting(false)
        })


        toast.promise(promise,{
            loading:"Unpublishing...",
            success:"Note unpublished!",
            error:"Failed to unpublish note.",
        })
    }

    const onCopy = ()=>{
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(()=>{
            setCopied(false)
        },1000)
    }





  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button size={'sm'} variant={'ghost'}>
                Publish
                {initialData.ispublished && (
                <Globe 
                className='text-sky-500 w-4 h-4 ml-2'
                />
                )}
            </Button>
        </PopoverTrigger>
        <PopoverContent className='w-72' align='end' alignOffset={8} forceMount>
                    {initialData.ispublished ?
                (
                    <div className="">
                        Published
                    </div>
                ):
                (
                    <div className="flex flex-col items-center justify-center">
                        <Globe  className='h-8 w-8 text-muted-foreground mb-2' />
                        <p className='text-sm font-medium mb-2'>Publish this note</p>
                        <span className=" text-xs text-muted-foreground mb-4">
                            Share your work with others
                        </span>
                        <Button disabled={isSubmiting} onClick={onPublish} className='w-full text-xs' size={'sm'}>
                            Publish
                        </Button>

                    </div>
                )    
                }
        </PopoverContent>
        </Popover>

  )
}
