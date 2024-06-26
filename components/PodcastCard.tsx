import React from 'react'
import Image from '../node_modules/next/image'

const PodcastCard = ({
    imgUrl, title, description, podcastId
}: {
    imgUrl: string,
    title: string,
    description: string,
    podcastId: number,
}) => {
    return (
        <div className="cursor-point">
            <figure className="flex flex-col gap-2">
                <Image
                    src={imgUrl}
                    width={174}
                    height={174}
                    alt={title}
                    className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
                />
                <div className="flex flex-col">
                    <h2 className='text-16 truncate font-bold text-white-1'>{title}</h2>
                    <h3 className='text-12 truncate font-normal capitalize text-white-4'>{description}</h3>
                </div>
            </figure>
        </div>
    )
}

export default PodcastCard
