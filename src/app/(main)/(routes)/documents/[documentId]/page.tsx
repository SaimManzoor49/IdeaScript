'use client'

import React from 'react'
import { useQuery } from 'convex/react'
import { Id } from '../../../../../../convex/_generated/dataModel'
import { api } from '../../../../../../convex/_generated/api'
import Toolbar from '@/components/Toolbar'

interface IDocumentPageProps{
    params:{
        documentId:Id<'documents'>
    }
}

export default function DocumentId({params}:IDocumentPageProps) {

    const document = useQuery(api.documents.getById,{
        documentId:params.documentId
    });

    if(document===undefined){
        return <div>
            Loading...
        </div>
    }

    if(document===null){
        return <div>Not found</div>
    }


  return (
    <div className='pb-40'>
        <div className="h-[35vh]" />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
            <Toolbar initialData={document} />
        </div>

    </div>
  )
}
