import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { abi } from "./assets/abis/GamePowerUpAbi";
import { GAMEPOWERUP_CONTRACT_ADDRESS } from "./assets/constants";
import { waitForTransactionReceipt } from 'wagmi/actions';
import { config } from './main';
import { useState } from "react";
import { toast } from 'react-toastify';

function App() {
  const {address, isConnected} = useAccount()
  const [isMinting, setIsMinting] = useState(false);
  const { data, isLoading, refetch } = useReadContract({
    abi,
    address: GAMEPOWERUP_CONTRACT_ADDRESS,
    functionName: "balanceOf",
    args: [address],
  })

  const {writeContractAsync} = useWriteContract()

  const handleMint = async () => {
    setIsMinting(true);

    try {
      const txHash =await writeContractAsync({
        abi,
        address: GAMEPOWERUP_CONTRACT_ADDRESS,
        functionName: "safeMint",
        args: [address, "www.examplePower.com"],
      })

      await waitForTransactionReceipt(config, {
        confirmations: 1,
        hash: txHash,
      })

      setIsMinting(false);
      toast.success('Tokens GPU minted successfully!');
      refetch();

    } catch (error) {
      console.error(error);  
  
      if (error instanceof Error) {
        const errorMessage = "You must wait before minting again";
        if (error.message.includes(errorMessage)) {
          toast.error('You must wait for the next hour');
        } else {
          toast.error('Failed to mint GPU tokens');
        }
      } else {
        toast.error('An unknown error occurred');
      }  
      setIsMinting(false);
    }
  };
 
  return (
    <main className="w-full flex justify-center items-center min-h-svh flex-col">
      <h1 className="text-4xl font-bold text-orange-600">Get a Power Up.</h1>
      <h1 className="text-1xl text-yellow-600">This is an exclusive NFT on the Arbitrum Sepolia network. </h1>
      <div className='space-y-5 my-5 p-4 flex flex-col gap-5 items-center'>
        <ConnectButton />
        { isConnected ? (
          <div className="flex flex-col items-center justify-center">
            <button className='px-3 py-1 font-semibold bg-slate-700 rounded-xl disabled:opacity-50' disabled={isMinting} onClick={handleMint}>
              {isMinting ? 'Sending...' : 'Get GPU'}
            </button>
            <p className="text-xs"><span>Balance:</span> {isLoading ? (<span className='opacity-50'>Loading...</span>) : (data?.toString())} <span>GPU</span></p>
          </div>
        ) : (
          <div>Please connect your wallet</div>
        )}
        
      </div>
    </main>
  );
}

export default App
