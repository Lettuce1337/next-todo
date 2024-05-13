'use client'
import { Link } from '@nextui-org/react';

export default function Error() {

    return (
        <div className="w-1/2 flex justify-center items-center flex-col">
            <p className='text-xl text-center'>Oops! Something went wrong while we are trying to process your request.</p>
            <Link href="/" className='text-2xl'>Go back to home page</Link>
        </div>
    );
}
