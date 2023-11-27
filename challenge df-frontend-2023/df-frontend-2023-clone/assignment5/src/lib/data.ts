import { IBook } from '@/src/types/book'

export const BOOK_TOPICS: { [key: string]: string } = {
  backend: 'Back-end',
  design: 'Design',
  frontend: 'Front-end',
  fullstack: 'Full-stack',
  ml: 'Machine Learning',
  programming: 'Programming',
  vcs: 'Version Control',
}

/* eslint-disable no-script-url */

export const INITIAL_BOOKS: IBook[] = [
  {
    id: '0',
    title: 'CSS Secrets',
    author: 'Lea Verou',
    topic: 'frontend',
  },
  {
    id: '1',
    title: 'Responsive Web Design',
    author: 'Ethan Marcotte',
    topic: 'frontend',
  },
  {
    id: '2',
    title: 'JavaScript Design Patterns',
    author: 'Addy Osmani',
    topic: 'programming',
  },
  {
    id: '3',
    title: 'Git',
    author: 'Linus Torvalds',
    topic: 'vcs',
  },
  {
    id: '4',
    title: 'Smart Interface Design Patterns',
    author: 'Vitaly Friedman',
    topic: 'design',
  },
  {
    id: '5',
    title: 'The Smashing Book',
    author: 'Smashing Magazine',
    topic: 'design',
  },
  {
    id: '6',
    title: 'Node.js',
    author: 'Ryan Dahl',
    topic: 'backend',
  },
  {
    id: '7',
    title: 'Designing Machine Learning Systems',
    author: 'Chip Huyen',
    topic: 'ml',
  },
  {
    id: '8',
    title: 'CSS Tricks',
    author: 'Chris Coyier',
    topic: 'frontend',
  },
  {
    id: '9',
    title: 'HTML Semantics',
    author: 'Smashing Magazine',
    topic: 'frontend',
  },
  {
    id: '10',
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    topic: 'programming',
  },
  {
    id: '11',
    title: 'Atomic Design',
    author: 'Brad Frost',
    topic: 'design',
  },
  {
    id: '12',
    title: 'TypeScript in 50 Lessons',
    author: 'Stefan Baumgartner',
    topic: 'programming',
  },
  {
    id: '13',
    title: 'Software Engineering - The Soft Parts',
    author: 'Addy Osmani',
    topic: 'programming',
  },
  {
    id: '14',
    title: 'Image Optimization',
    author: 'Addy Osmani',
    topic: 'frontend',
  },
  {
    id: '15',
    title: 'jQuery',
    author: 'John Resig',
    topic: 'frontend',
  },
  {
    id: '16',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    topic: 'programming',
  },
  {
    id: '17',
    title: 'C++ Programming Language',
    author: 'Bjarne Stroustrup',
    topic: 'programming',
  },
  {
    id: '18',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    topic: 'programming',
  },
  {
    id: '19',
    title: 'Refactoring',
    author: 'Martin Fowler',
    topic: 'programming',
  },
  {
    id: '20',
    title: 'The Pragmatic Programmer',
    author: 'Andy Hunt',
    topic: 'programming',
  },
  {
    id: '21',
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    topic: 'programming',
  },
  {
    id: '22',
    title: 'Python',
    author: 'Guido van Rossum',
    topic: 'programming',
  },
  {
    id: '23',
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    topic: 'programming',
  },
]

/* eslint-enable no-script-url */
