import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5rem;
`

export const HomeCardsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  align-content: center;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const MonthCard = styled.div`
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;
  height: 10rem;
  display: flex;
  justify-content: center;

  align-items: center;

  strong {
    display: block;
    font-size: 2rem;
  }

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['green-500']};
  }
`
