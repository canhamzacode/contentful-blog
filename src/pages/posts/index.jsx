import PostCard from '@/components/posts/PostCard';
import { client } from '@/lib/contentful'

const Posts = ({ posts }) => {
  console.log("posts", posts);

  return (
    <section className='section'>
      <div className='container'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
          {posts.map((post, i) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'blogPost' })

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}

export default Posts