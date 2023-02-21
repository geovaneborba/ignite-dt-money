import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import igniteLogo from '../../assets/ignite-logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={igniteLogo} alt="DT Money logo" />

        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.DialogTrigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
