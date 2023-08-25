import React from "react";
import Davatar from "@davatar/react";
import { Link } from "react-router-dom";
import { createBreakpoint } from "react-use";
import { shortenAddress } from "lib/legacy";
import { useJsonRpcProvider } from "lib/rpc";
import { useChainId } from "lib/chains";
import "./index.css"

type AddressViewProps = {
  address: string;
  size: number;
};

export default function AddressView({ address, size = 24 }: AddressViewProps) {
  const { chainId } = useChainId();
  const { provider } = useJsonRpcProvider(chainId) || {};
  const useBreakpoint = createBreakpoint({ L: 600, M: 550, S: 400 });
  const breakpoint = useBreakpoint();

  return (
    <Link className="trader-account-lable" to={ `/actions/v2/${address}` } target="_blank">
      {/* {
        provider
          ? <Davatar size={size} address={address} provider={provider}/>
          : <div className="davatar-placeholder" style={{ width: `${size}px`, height: `${size}px` }}/>
      } */}
      <span>{ shortenAddress(address, breakpoint === "S" ? 20 :42) }</span>
    </Link>
  );
}