import React from 'react'
import { render, screen } from '@testing-library/react'
import AltLayout from './AltLayout'

describe('PostDetails', () => {
  it('renders the Home link', () => {
    render(<AltLayout>Children</AltLayout>)

    expect(screen.getByText('Fail')).toBeDefined()
  })
})
