import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { HomeCardsContainer, HomeContainer, MonthCard } from './style'

const mounths = ['2023']

export default function Year() {
  return (
    <HomeContainer>
      <Link to="/">
        <img src={logoImg} alt="dt money" />
      </Link>
      <HomeCardsContainer>
        {mounths.map((month) => (
          <Link to={`/${month}`} key={month}>
            <MonthCard key={month}>
              <strong>{month}</strong>
            </MonthCard>
          </Link>
        ))}
      </HomeCardsContainer>
    </HomeContainer>
  )
}
