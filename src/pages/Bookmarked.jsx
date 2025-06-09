import React from 'react'
import articles from '../articles'
import NewsCard from '../components/generalComponents/NewsCard'

const Bookmarked = () => {
  return (
    <div className='w-full h-full p-5 flex flex-col gap-5 pb-24 z-10 relative bg-background dark:bg-darkBackground'>
      
      <div className='w-full flex flex-row items-center gap-3'>
        <svg className='text-primary dark:text-darkPrimary' xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
          fill="currentcolor" viewBox="0 0 24 24" >
          <path d="M18.5 2h-12C4.57 2 3 3.57 3 5.5V21c0 .35.18.67.47.85s.66.2.97.04l5.55-2.78 5.55 2.78a.997.997 0 0 0 1.45-.89v-8h4c.55 0 1-.45 1-1V5.5c0-1.93-1.57-3.5-3.5-3.5ZM15 19.38l-4.55-2.28a1 1 0 0 0-.89 0l-4.55 2.28V5.5c0-.83.67-1.5 1.5-1.5h8.85c-.22.46-.35.96-.35 1.5v13.88ZM20 11h-3V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path>
        </svg>
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