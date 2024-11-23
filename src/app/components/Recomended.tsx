import React from 'react'
import Search from './ui/Search'
import Image from 'next/image'
import PhotographyImg from '../../../public/photography.jpg'
import { BsDot } from 'react-icons/bs'

const Recomended = () => {
    return (
        <div>
            <div>
                <Search />
            </div>
            <div className='pt-6'>
                <div>
                    <h1 className='text-xl font-semibold text-neutral-700'>Recommended</h1>
                </div>
                <div className="overflow-hidden rounded-lg shadow-md pt-4">
                    <div className="relative aspect-video">
                        <Image
                            src={PhotographyImg}
                            alt={"Photo"}
                            fill
                            className="object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-500/80 to-transparent" >
                            <div className='absolute bottom-3 left-3'>
                                <div>
                                    <p className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                                        JavaScript
                                        <span className="flex items-center text-white">
                                            <BsDot className="text-xl font-bold text-white" />
                                            3min ago
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <h1 className='text-lg font-semibold text-neutral-200 leading-none'>Most valuable syntax provided by JavaScript to save users time.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recomended