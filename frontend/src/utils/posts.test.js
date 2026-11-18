
import { describe, expect, it } from 'vitest';
import { filterPosts } from './posts';

const samplePosts = [
  {
    title: 'Learning React',
    excerpt: 'My journey with JavaScript',
    author: 'Belinda',
  },
  {
    title: 'Community Updates',
    excerpt: 'News from our community',
    author: 'Stacy',
  },
  {
    title: 'Web Development',
    excerpt: 'Building projects with HTML and CSS',
    author: 'Carlos',
  },
];

describe('filterPosts', () => {
  it('filters posts by title', () => {
    expect(filterPosts(samplePosts, 'react')).toHaveLength(1);
  });

  it('filters posts by content', () => {
    expect(filterPosts(samplePosts, 'JavaScript')).toHaveLength(1);
  });

  it('filters posts by author', () => {
    expect(filterPosts(samplePosts, 'Stacy')).toHaveLength(1);
  });

  it('returns all posts when the search term is empty', () => {
    expect(filterPosts(samplePosts, '')).toHaveLength(3);
  });

  it('returns an empty array when no posts match', () => {
    expect(filterPosts(samplePosts, 'football')).toHaveLength(0);
  });
});
