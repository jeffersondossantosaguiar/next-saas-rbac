import githubIcon from '@/assets/github-icon.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <form action="" className='space-y-4'>
      <div className='space-y-1'>
        <Label htmlFor='nam'>Name</Label>
        <Input name='nam' type='nam' id='nam' />
      </div>

      <div className='space-y-1'>
        <Label htmlFor='email'>E-mail</Label>
        <Input name='email' type='email' id='email' />
      </div>

      <div className='space-y-1'>
        <Label htmlFor='password'>Password</Label>
        <Input name='password' type='password' id='password' />
      </div>

      <div className='space-y-1'>
        <Label htmlFor='password_confirmation'>Confim your password</Label>
        <Input name='password_confirmation' type='password' id='password_confirmation' />
      </div>

      <Button className='w-full' type='submit'>
        Create account
      </Button>

      <Button className='w-full' variant='link' size='sm' asChild>
        <Link href='/auth/sign-in'>Already registered? Sing In</Link>
      </Button>

      <Separator />

      <Button type='submit' className='w-full' variant='outline'>
        <Image src={githubIcon} alt='' className='mr-2 size-4 dark:invert' />
        Sign up with Github
      </Button>

    </form>
  );
}