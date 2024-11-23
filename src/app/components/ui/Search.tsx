import { SearchIcon } from 'lucide-react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div>
            <div className='relative'>
                <input
                    className=' w-full px-3 py-3 border-none outline-none rounded-xl'
                    type="text"
                    placeholder='Article name, tags, hashtags, categories...' />
                <BiSearch className='absolute top-3 right-2 text-2xl font-semibold text-neutral-600' />
            </div>
        </div>
    )
}

export default Search