import React from 'react'
import { Input, Button, Divider, Link } from '@nextui-org/react'
import { GithubIcon, GoogleIcon } from '@/types/icons'
import { fontPoppins } from '@/config/fonts'

export function SignInForm() {
  return (
    <div className='max-md: flex flex-col items-center justify-center p-2 max-md:h-full lg:w-1/2'>
      <div className='w-[60%]'>
        <h1 className={fontPoppins.className + ' mb-4 text-center text-5xl'}>Green4U</h1>
        <div className='my-2 flex flex-col gap-4'>
          <Button color='default' variant='bordered' radius='sm' startContent={<GoogleIcon />}>
            Sign In with Google
          </Button>
          <Button color='default' variant='bordered' radius='sm' startContent={<GithubIcon />}>
            Sign In with GitHub
          </Button>
        </div>
        <Divider orientation='horizontal' className='my-4' />
        <div className='my-2 flex w-full flex-col gap-4'>
          <Input variant='bordered' radius='sm' type='email' label='Email' labelPlacement='outside' />
          <Input variant='bordered' radius='sm' type='password' label='Password' labelPlacement='outside' />
        </div>
      </div>
      <div className='my-2 flex flex-row gap-8'>
        <Button variant='solid' color='success' disableRipple={false} radius='sm' size='lg' className='text-white'>
          Sign In
        </Button>
        <Button variant='flat' disableRipple={false} color='success' radius='sm' size='lg'>
          Reset
        </Button>
      </div>
      <div className='flex flex-row gap-1'>
        Don&apos;t have an account yet,{' '}
        <Link href='/signup' color='success'>
          sign up
        </Link>
      </div>
    </div>
  )
}
