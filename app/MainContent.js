import React from 'react'
import Image from 'next/image'
import img2 from './img2.jpeg'
const posts = [
    {
      id: 1,
      title: 'Foster a sense of satisfaction and value through inclusive events',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/discussion-and-communication-5/512/like-256.png',
    },
    {
        id: 2,
        title: 'Maintaining traditions while promoting new collabrations',
        imageUrl:
          'https://cdn1.iconfinder.com/data/icons/business-people-65/64/Colaboration-person-people-business-worker-256.png',
        
      },
      {
        id: 3,
        title: 'Creating opportunities to connect beyond usual groups',
        imageUrl:
          'https://cdn2.iconfinder.com/data/icons/business-and-finance-383/30/chat_communication_message_talk_chatting_conference-_4-512.png',
      },
    // More posts...
  ]
const MainContent = () => {
  return (
    <div>
        <div className='flex justify-evenly flex-row gap-x-10 mt-[80px] mx-8 my-[200px]'>
            <Image src={img2} className='rounded-full sm:block hidden' height={330} width={305}/>
            
            <div className='flex flex-col items-center gap-y-4'>
                <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-gray-900 lg:col-span-2 xl:col-auto">
                    Who I am
                </h1>
                <Image src={img2} className='rounded-full sm:hidden block mt-8' height={165} width={170}/>
                <div className="mt-[40px] max-w-xl xl:col-end-1 xl:row-start-1 ring-[2px] ring-gray-100 p-10 rounded-xl shadow-lg">
                    <p className="text-lg leading-8 text-gray-600">
                    • Amiable and caring person
                    </p>
                    <p className="text-lg leading-8 text-gray-600">
                    • Pragmatic and grounded
                    </p>
                    <p className="text-lg leading-8 text-gray-600">
                    • Loves to try out new sports 😀
                    </p>
                </div>
            </div>
        </div>
        <div className='flex justify-evenly flex-row gap-x-10 my-[170px]'>
            <div className='flex flex-col items-center'>
                <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-gray-900 lg:col-span-2 xl:col-auto">
                    Manifesto
                </h1>
                <div className="mx-[10%] mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="-z-10 min-w-[240px] min-h-[3vh] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl ring-[3px] shadow-lg ring-gray-100 bg-gray-50 px-8 pb-8 pt-[30px] sm:pt-24 md:pt-[30px]"
            >
              <div className='flex justify-center items-center'>
                <img alt="" src={post.imageUrl} className=" -z-20 w-full h-full object-cover transform scale-[0.5]"/>
              </div>

              <h3 className="mt-3 text-xl font-bold leading-6">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
            </div>
        </div>
    </div>
  )
}

export default MainContent