import moment from 'moment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: { text?: string }) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  deleteTransaction: (id: number) => Promise<void>
  isFetching: boolean
}

interface TransactionProviderProps {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isFetching, setIsFetching] = useState(true)
  const { month, year } = useParams()

  const fetchTransactions = async (query?: { text?: string }) => {
    try {
      const response = await api.get('transactions', {
        params: {
          q: query?.text,
          _sort: 'createdAt',
          _order: 'desc',
          month,
          year,
        },
      })

      setTransactions(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetching(false)
    }
  }

  const createTransaction = async (data: CreateTransactionInput) => {
    const { description, price, category, type } = data

    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      date: moment(`${year}-${month}`),
    })

    setTransactions((state) => [response.data, ...state])
  }

  console.log(transactions)

  const deleteTransaction = async (id: number) => {
    await api.delete(`/transactions/${id}`)

    setTransactions((state) =>
      state.filter((transaction) => transaction.id !== id),
    )
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        deleteTransaction,
        isFetching,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
