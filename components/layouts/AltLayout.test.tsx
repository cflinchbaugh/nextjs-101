import React from 'react'
import { render, screen } from '@testing-library/react'
import AltLayout from './AltLayout'

describe('PostDetails', () => {
  it('renders the Alt Layout Nav text', () => {
    render(<AltLayout>Children</AltLayout>)

    expect(screen.getByText('Alt Layout Nav')).toBeDefined()
  })
})
