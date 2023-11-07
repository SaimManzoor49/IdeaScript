'use client'
import { useMutation, useQuery } from 'convex/react';
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';
import { toast } from 'sonner';
import { Spinner } from '@/components/spinner';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
// import { Spinner } from '@/components/spinner';

export default function TrashBox() {
    const router = useRouter();
    const params = useParams()
    const documents = useQuery(api.documents.getTrash)
    const restore = useMutation(api.documents.restore)
    const remove = useMutation(api.documents.remove)

    const [search,setSearch] = useState("")


    const filteredDocuments = documents?.filter((document)=>{
        return document.title.toLowerCase().includes(search.toLowerCase())
    })

    const onClick = (documentId:string)=>{
        router.push(`/documents/${documentId}`)
    }

    const onRestore = (
        e:React.MouseEvent<HTMLDivElement,MouseEvent>,
        documentId:Id<"documents">
    )=>{
        e.stopPropagation()
        const promise = restore({id:documentId})
        toast.promise(promise,{
            loading:'Restoring note...',
            success:'Note restored!',
            error:'Failed to restore note',
        })
    }
    const onRemove = (
        documentId:Id<"documents">
    )=>{
        const promise = remove({id:documentId})
        toast.promise(promise,{
            loading:'Deleting note...',
            success:'Note deleted!',
            error:'Failed to delete note',
        })

        if(params.documentId === documentId){
            router.push('/documents')
        }
    }

    if(documents===undefined){
        return <div className='h-full flex items-center p-4'>
            <Spinner size='large'/>
        </div>
    }

  return (
    <div className='text-sm'>
        <div className="flex items-center gap-x-1 p-2">
        <Search className='h-4 w-4'/>
        <Input 
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        className='h-7 px-2 focus-visible:ring-transparent bg-secondary'
        placeholder='Filter by page title...'
        />
        </div>
        <div className="mt-2 px-1 pb-1">
            <p className="hidden last:block text-xs text-center text-muted-foreground pb-2">
                No documnets found.
            </p>
        </div>
    </div>
  )
}
