// components/PostFetcher.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  name: string;
  technologies: string;
  content: string;
  graduate: string;
}

const PostFetcher: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hvtienprotv84.github.io/fetchapi-main/data.json');
        setPosts(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((post) => (
            <ul key={post.id}>
                <li>
                <h2>{post.name}</h2>
                <p>{post.technologies}</p>
                <p>{post.content}</p>
                <p>{post.graduate}</p>
                </li>
            </ul>
        ))
      ) : (
        <li>No posts available</li>
      )}
    </ul>
  );
};

export default PostFetcher;
