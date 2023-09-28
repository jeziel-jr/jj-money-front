import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { SearchFormContainer } from './style'

const searchFormSchema = z.object({
  query: z.object({
    text: z.string(),
  }),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    const { query } = data

    await fetchTransactions(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="search"
        placeholder="Busque por transações"
        {...register('query.text')}
      />

      <button disabled={isSubmitting} type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
