import PostFeed from "@/components/posts/PostFeed"
import Header from "@/components/Header"
import Form from "@/components/Form"

export default function Home() {
  return (
    <div className="h-full">
      <Header label="Home" />
      <Form placeholder="What you Mind ?" />
      <PostFeed />
    </div>
  )
}
