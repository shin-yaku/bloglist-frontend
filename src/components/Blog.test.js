import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders title and author but not url and likes', () => {
  const blog = {
    title: 'Awesome Blog',
    author: 'Awesome Man',
    url: 'http://example.com',
    likes: 12345
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Awesome Blog'
  )
  expect(component.container).toHaveTextContent(
    'Awesome Man'
  )
  expect(component.container).not.toHaveTextContent(
    'http://example.com'
  )
  expect(component.container).not.toHaveTextContent(
    '12345'
  )
})