import React from 'react'
import articles from '../articles'
import NewsCard from '../components/generalComponents/NewsCard'

const Bookmarked = () => {
  return (
    <div className='w-full h-full p-5 flex flex-col gap-5 pb-24 z-10 relative bg-background dark:bg-darkBackground'>
      
      <div className='w-full flex flex-row items-center gap-3'>
        <p className='text-lg font-semibold'>Read Later</p>
      </div>

      <div className='w-full h-full flex flex-col gap-2'>
        {articles.map((article, _) => (
          <NewsCard
            key={article.id}
            articleImage={article.articleImage}
            authorImage={article.authorImage}
            title={article.title}
            authorName={article.authorName}
            date={article.date}
            category={article.category[0]}
          />
        ))}
      </div>

    </div>
  )
}

export default Bookmarked