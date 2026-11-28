import { describe, expect, it } from 'vitest';
import { searchPosts, sortNewestFirst } from './posts.js';

const posts = [
  {
    id: 1,
    title: 'Older Post',
    author: 'Alice',
    createdAt: '2026-01-10T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'Newer Post',
    author: 'Brian Kamau',
    createdAt: '2026-01-15T00:00:00.000Z',
  },
];

describe('sortNewestFirst', () => {
  it('puts the newest post first', () => {
    const sorted = sortNewestFirst(posts);
    expect(sorted.map((post) => post.id)).toEqual([2, 1]);
  });

  it('does not change the original array', () => {
    const original = posts.map((post) => ({ ...post }));
    sortNewestFirst(posts);
    expect(posts).toEqual(original);
  });
});

describe('searchPosts', () => {
  it('matches a title regardless of case', () => {
    const found = searchPosts(posts, 'newer');
    expect(found.map((post) => post.id)).toEqual([2]);
  });

  it('matches an author', () => {
    const found = searchPosts(posts, 'alice');
    expect(found.map((post) => post.id)).toEqual([1]);
  });

  it('returns every post when the query is blank', () => {
    expect(searchPosts(posts, '   ')).toEqual(posts);
  });
});
