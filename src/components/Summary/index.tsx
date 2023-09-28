import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { Loader, SummaryCard, SummaryContainer } from './style'

export function Summary() {
  const isFetching = useContextSelector(TransactionsContext, (context) => {
    return context.isFetching
  })
  const sumary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard dataLoading={isFetching}>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <header>
              <span>Entradas</span>
              <ArrowCircleUp size={32} color="#00b37e" />
            </header>

            <strong>{priceFormatter.format(sumary.income)}</strong>
          </>
        )}
      </SummaryCard>

      <SummaryCard dataLoading={isFetching}>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <header>
              <span>Saídas</span>
              <ArrowCircleDown size={32} color="#f75a68" />
            </header>

            <strong>{priceFormatter.format(sumary.outcome)}</strong>
          </>
        )}
      </SummaryCard>

      <SummaryCard variant="green" dataLoading={isFetching}>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <header>
              <span>Total</span>
              <CurrencyDollar size={32} color="#fff" />
            </header>

            <strong>{priceFormatter.format(sumary.total)}</strong>
          </>
        )}
      </SummaryCard>
    </SummaryContainer>
  )
}
