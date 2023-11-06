'use client'
import React from 'react'
import NotesHeroAnimation from '../../_components/NotesHeroAnimation'
import { useUser } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function Page() {
  const {user} = useUser();
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
<NotesHeroAnimation />
<h2 className='text-lg font-medium'>Welcome to {user?.firstName}&apos;s Script</h2>
<Button>
  <PlusCircle className='h-4 w-4 mr-2' /> Create Note
</Button>
      </div>
  )
}
