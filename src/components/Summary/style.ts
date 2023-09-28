import styled, { css, keyframes } from 'styled-components'

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
  dataLoading?: boolean
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;

  min-height: ${({ dataLoading }) => (dataLoading ? '150px' : 'none')};
  padding: ${({ dataLoading }) => (dataLoading ? '0' : '2rem')};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${({ variant }) =>
    variant === 'green' &&
    css`
      background-color: ${({ theme }) => theme['green-700']};
    `}
`
const shimmer = keyframes`
  0% {
    background: #fff3;
  }
  100% {
    background: transparent;
  }
`

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  animation: ${shimmer} 2s infinite ease-in-out alternate;
  filter: blur(1px);
`
