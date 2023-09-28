import * as Dialog from '@radix-ui/react-dialog'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logoImg} alt="dt money" />
        </Link>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
