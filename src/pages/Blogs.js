import React, { useState } from 'react';
import './Pages.css';

const blogPosts = [
  {
    id: 1,
    title: 'Introducing Traffic Rescue: Your Solution to Bangalore Traffic',
    excerpt: 'Stuck in traffic? Our revolutionary Traffic Rescue service sends a biker to pick you up while we handle your car.',
    category: 'Product Update',
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'How Raahi is Empowering 100,000 Driver Partners Across India',
    excerpt: 'From flexible earnings to insurance benefits, discover how we support our driver community.',
    category: 'Community',
    date: 'Feb 18, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=250&fit=crop',
    featured: false
  },
  {
    id: 3,
    title: 'Safety Features Every Rider Should Know About',
    excerpt: 'From SOS buttons to real-time tracking, here are the safety features that protect you on every ride.',
    category: 'Safety',
    date: 'Feb 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop',
    featured: false
  },
  {
    id: 4,
    title: 'Raahi Expands to 10 New Cities in South India',
    excerpt: 'We are excited to announce our expansion to Chennai, Hyderabad, Kochi, and more.',
    category: 'News',
    date: 'Feb 12, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=250&fit=crop',
    featured: false
  },
  {
    id: 5,
    title: 'The Future of Intercity Travel in India',
    excerpt: 'How technology is transforming long-distance travel and what it means for Indian commuters.',
    category: 'Insights',
    date: 'Feb 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=400&h=250&fit=crop',
    featured: false
  },
  {
    id: 6,
    title: 'Sustainable Transportation: Raahi\'s Green Initiative',
    excerpt: 'Our commitment to reducing carbon emissions and promoting eco-friendly transportation.',
    category: 'Sustainability',
    date: 'Feb 8, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=250&fit=crop',
    featured: false
  }
];

const categories = ['All', 'Product Update', 'Community', 'Safety', 'News', 'Insights', 'Sustainability'];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="page blogs-page">
      <section className="page-hero-split">
        <div className="page-hero-split-content">
          <h1 className="page-title">Blog</h1>
          <p className="page-subtitle">
            Stories, updates, and insights from the Raahi team — India's saviour taxi and mobility app.
          </p>
        </div>
        <div className="page-hero-split-image">
          <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80" alt="Raahi blog and stories" />
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          {featuredPost && (
            <div className="featured-post">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span className="category-badge">{featuredPost.category}</span>
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <span>{featuredPost.date}</span>
                  <span className="divider">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <button className="btn btn-outline">Read More</button>
              </div>
            </div>
          )}

          <div className="blog-filters">
            <div className="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="category-filters">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts.filter(post => !post.featured).map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="category-badge">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="post-meta">
                    <span>{post.date}</span>
                    <span className="divider">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="read-more">Read More →</span>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
