import Identicon from '@polkadot/react-identicon';
import clsx from 'clsx';
import { Mint } from './Mint';
import { buttonStyles } from '@gear-js/ui';
import { AllBalancesFungibleToken } from './AllBalancesFungibleToken';

type Props = {
  address: string;
  name: string | undefined;
  onClick: () => void;
  isActive?: boolean;
  block?: boolean;
};

function AccountButton({ address, name, onClick, isActive, block }: Props) {
  const className = clsx(
    buttonStyles.button,
    buttonStyles.normal,
    isActive ? buttonStyles.primary : buttonStyles.secondary,
    block && buttonStyles.block,
  );

  return (
    <>
   
    <button type="button" className={className} onClick={onClick}>
      <Identicon value={address} className={buttonStyles.icon} theme="polkadot" size={28} />
      {name}
    </button>
    </>
  );
}

export { AccountButton };
