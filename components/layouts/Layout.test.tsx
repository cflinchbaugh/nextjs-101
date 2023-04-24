import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './Layout'

describe('PostDetails', () => {
  it('renders the Home link', () => {
    render(<Layout>Children</Layout>)

    expect(screen.getByText('Home')).toBeDefined()
  })
})
