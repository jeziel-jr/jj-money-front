import { Link, useParams } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { HomeCardsContainer, HomeContainer, MonthCard } from './style'

const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
]

const transformMonthNumberToMonth = (mounthNumber: string) => {
  switch (mounthNumber) {
    case '01':
      return 'Janeiro'
    case '02':
      return 'Fevereiro'
    case '03':
      return 'Março'
    case '04':
      return 'Abril'
    case '05':
      return 'Maio'
    case '06':
      return 'Junho'
    case '07':
      return 'Julho'
    case '08':
      return 'Agosto'
    case '09':
      return 'Setembro'
    case '10':
      return 'Outubro'
    case '11':
      return 'Novembro'
    case '12':
      return 'Dezembro'
  }
}

export default function Month() {
  const { year } = useParams()

  return (
    <HomeContainer>
      <Link to="/">
        <img src={logoImg} alt="dt money" />
      </Link>
      <HomeCardsContainer>
        {months.map((month) => (
          <Link to={`/${year}/${month}`} key={month}>
            <MonthCard key={month}>
              <strong>{transformMonthNumberToMonth(month)}</strong>
            </MonthCard>
          </Link>
        ))}
      </HomeCardsContainer>
    </HomeContainer>
  )
}
