import React from 'react'
import { podcastData } from '../../constants/index'
import PodcastCard from '../../components/PodcastCard'

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        {podcastData.map(({ id, title, description, imgURL }) => {
          return (
            <PodcastCard
              key={id}
              imgUrl={imgURL}
              title={title}
              description={description}
              podcastId={id}
            />
          )
        })}

      </section>
    </div>
  )
}

export default Home
