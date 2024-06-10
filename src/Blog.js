import foodMarketImage from "./food-market.jpg";
import londonGemsImage from "./london-gems.jpg";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Hidden Gems of London",
      date: "June 1, 2024",
      author: "Alexander K",
      summary:
        "Discover the lesser-known attractions of London that offer unique experiences and unforgettable memories.",
      image: foodMarketImage,
    },
    {
      id: 2,
      title: "A Guide to the Best Food Markets in the UK",
      date: "June 5, 2024",
      author: "Anna T",
      summary:
        "Explore the top food markets in the UK where you can enjoy a variety of delicious and fresh local produce.",
      image: londonGemsImage,
    },
  ];

  return (
    <div className="centered-container">
      <div className="blog-container">
        <h1 className="blog-header">Our Blog</h1>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-post"
            >
              <img
                src={post.image}
                alt={post.title}
                className="blog-post-image"
              />
              <div className="blog-post-content">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-date">
                  {post.date} | By {post.author}
                </p>
                <p className="blog-post-summary">{post.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
