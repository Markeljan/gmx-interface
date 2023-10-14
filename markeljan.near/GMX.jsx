/// Layout
const DaisyUIWrapper = ({ children }) => {
    return (
        <Widget
            src="igris.near/widget/DaisyUIWrapper"
            props={{
                children,
                daisyUiTheme: "synthwave",
            }}
        />
    );
};

/// Assets
const IconETH = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24.002"
            viewBox="0 0 24 24.002"
            width="24"
        >
            <path d="m0 .003h24v24h-24z" fill="none" />
            <path
                d="m23.64 14.905a12 12 0 1 1 -8.74-14.545 12 12 0 0 1 8.74 14.545z"
                fill="#fff"
                transform="translate(0 -.001)"
            />
            <g transform="translate(6.858 3.628)">
                <path
                    d="m383.612 0-.112.382v11.075l.112.112 5.141-3.039z"
                    fill="#343434"
                    transform="translate(-378.471)"
                />
                <path d="m5.141 0-5.141 8.53 5.141 3.039z" fill="#8c8c8c" />
                <path
                    d="m387.3 727.927-.063.077v3.945l.063.185 5.144-7.245z"
                    fill="#3c3c3b"
                    transform="translate(-382.162 -715.385)"
                />
                <path
                    d="m5.141 732.135v-4.207l-5.141-3.038z"
                    fill="#8c8c8c"
                    transform="translate(0 -715.385)"
                />
                <path
                    d="m392.07 477.706 5.141-3.039-5.141-2.337z"
                    fill="#141414"
                    transform="translate(-386.929 -466.137)"
                />
                <path
                    d="m0 474.667 5.141 3.039v-5.376z"
                    fill="#393939"
                    transform="translate(0 -466.137)"
                />
            </g>
        </svg>
    );
};

const IconLong = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="9.856"
            viewBox="0 0 15.704 9.856"
            width="15.704"
        >
            <path
                d="m529-488.59v5.67l-2.113-2.109-5.326 5.319-2.924-2.921-3.9 3.9-1.444-1.448 5.341-5.341 2.924 2.924 3.882-3.882-2.113-2.109z"
                fill="#fff"
                transform="translate(-513.3 488.59)"
            />
        </svg>
    );
};

const IconShort = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="9.856"
            viewBox="0 0 15.704 9.856"
            width="15.704"
        >
            <path
                d="m0 0v5.67l2.113-2.11 5.326 5.32 2.924-2.921 3.9 3.9 1.437-1.451-5.337-5.341-2.924 2.924-3.882-3.882 2.113-2.109z"
                fill="#fff"
                transform="matrix(-1 0 0 -1 15.704 9.856)"
            />
        </svg>
    );
};

const LogoGMX = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="21.462"
            viewBox="0 0 82.878 21.462"
            width="82.878"
        >
            <linearGradient
                id="a"
                gradientUnits="objectBoundingBox"
                x1=".536"
                x2=".011"
                y1=".026"
                y2="1"
            >
                <stop offset="0" stopColor="#03d1cf" stopOpacity=".988" />
                <stop offset="1" stopColor="#4e09f8" />
            </linearGradient>
            <path
                d="m555.182 717.462-14.735-21.462-14.78 21.462h20.592l-5.812-8.191-2.883 4.256h-3.064l5.949-8.557 8.6 12.493z"
                fill="url(#a)"
                transform="translate(-525.667 -696)"
            />
            <path
                d="m9.216-8.544c-.168 0-.24.072-.24.24v1.44c0 .168.072.24.24.24h4.776v2.524a5.361 5.361 0 0 1 -4.848 2.42c-3.576 0-5.784-2.3-5.784-6.72 0-4.392 2.592-6.72 5.544-6.72 2.3 0 4.176.912 4.776 3.12a.281.281 0 0 0 .288.24h1.532c.168 0 .264-.072.264-.24-.648-3.36-3.528-5.04-6.864-5.04-3.744 0-7.656 2.88-7.656 8.64 0 5.688 3.7 8.64 7.992 8.64a7.468 7.468 0 0 0 6.528-3.456 1.567 1.567 0 0 0 .24-.912v-4.172c0-.168-.072-.24-.24-.24zm24.912-8.016c0-.168-.072-.24-.24-.24h-2.28a.37.37 0 0 0 -.384.24l-4.656 10.68-4.656-10.68a.37.37 0 0 0 -.384-.24h-2.28c-.168 0-.24.072-.24.24v16.32c0 .168.072.24.24.24h1.536c.168 0 .24-.072.24-.24v-13.416l4.7 10.632a.331.331 0 0 0 .312.216h1.064a.331.331 0 0 0 .312-.216l4.7-10.632v13.416c0 .168.072.24.24.24h1.536c.168 0 .24-.072.24-.24zm5.232 0c-.168-.216-.168-.24-.336-.24h-1.848c-.168 0-.24.12-.168.24l5.088 7.7-5.712 8.62c-.072.12 0 .24.168.24h1.8c.168 0 .216-.024.384-.24l4.564-6.86 4.556 6.86c.168.216.216.24.384.24h1.8c.168 0 .24-.12.168-.24l-5.708-8.616 5.088-7.7c.072-.12 0-.24-.168-.24h-1.852c-.168 0-.168.024-.336.24l-3.932 5.924z"
                fill="#fff"
                transform="translate(32.642 19.131)"
            />
        </svg>
    );
};

/// UTILS
function formatUsd(num) {
    return num / Math.pow(10, 12);
}

/// CONSTANTS

const ARBITRUM_CHAINID = 42161
const ARBITRUM_GOERLI_CHAINID = 421613;
const GMX_ROUTER_ADDRESS = "0xFE98518C9c8F1c5a216E999816c2dE3199f295D2";
const ETH_ORDERVAULT_ADDRESS = "0x82aFd2590814a7Ce3d7ea6b63F80481F8b227bA9";
const WETH_TOKEN_ADDRESS = "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3";
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const MARKET_ADDRESS = "0x1529876A9348D61C6c4a3EEe1fe6CbF1117Ca315";
const SWAP_PATH_ADDRESS_1 = "0x72349b00768601D9598084220224948CE5b6Ebdd";
const SWAP_PATH_ADDRESS_2 = "0x22B9076BBCD93E491999AA748fDD6623fa019532";


/// State
State.init({
    payAmount: "",
    payTokenData: undefined,
    leverage: 1.1,
    isLong: true,
    sender: undefined,
    balance: undefined,
    wrongNetwork: undefined,
});
const {
    payAmount,
    payTokenData,
    leverage,
    isLong,
    sender,
    balance,
    wrongNetwork,
} = state;
const { maxPrice, minPrice, tokenSymbol } = payTokenData;

const entryPrice = payTokenData && formatUsd(isLong ? maxPrice : minPrice);
const entryPriceDisplay =
    entryPrice &&
    "$" +
    entryPrice.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

const payValue = payAmount && payAmount * entryPrice;
const payValueDisplay =
    payValue > 0 &&
    ": $" +
    payValue.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

const leverageAmount = payAmount && payAmount * leverage * 0.99;

const leveragedValue = payValue && leverageAmount * entryPrice;
const leveragedValueDisplay =
    leveragedValue > 0 &&
    ": ~$" +
    leveragedValue.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

const feeValue = leveragedValue && leveragedValue * 0.0014;
const feeValueDisplay =
    "-$" +
    Math.max(feeValue, 1.5).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

// FETCH ABI
const abiResponse = fetch(
    "https://gist.githubusercontent.com/Markeljan/8943727d183aaa886e1a28511c497392/raw/6a5e7761b8f69b49e9c8560e9d95f7446b40a5d4/GMXExchangeRouterABI.json"
);

if (!abiResponse.ok) {
    return "Loading ABI...";
}

const GMX_ROUTER_ABI = abiResponse.body;

const iface = new ethers.utils.Interface(GMX_ROUTER_ABI);

const gmxRouterContract =
    sender &&
    new ethers.Contract(
        GMX_ROUTER_ADDRESS,
        GMX_ROUTER_ABI,
        Ethers.provider().getSigner()
    );

// FETCH ETH PRICE
const gmxPriceOracleResponse = fetch(
    "https://gmx-synthetics-api-arb-goerli-4vgxk.ondigitalocean.app/prices/tickers"
);
if (!gmxPriceOracleResponse.ok) {
    throw new Error("Error fetching ETH price.");
}
const gmxPriceData = gmxPriceOracleResponse.body;
const ethTokenData = gmxPriceData.find((item) => item.tokenSymbol === "ETH");
State.update({
    payTokenData: ethTokenData,
});

// RECONNECT TO WALLET
if (sender === undefined) {
    State.update({ sender: Ethers.send("eth_requestAccounts", [])[0] });
}

// FETCH SENDER BALANCE
if (sender && balance === undefined) {
    Ethers.provider()
        .getBalance(sender)
        .then((balance) => {
            State.update({ balance: Big(balance).div(Big(10).pow(18)).toFixed(12) });
        });

    Ethers.provider()
        .getNetwork()
        .then((network) => {
            if (
                network.chainId !== ARBITRUM_CHAINID &&
                network.chainId !== ARBITRUM_GOERLI_CHAINID
            ) {
                State.update({ wrongNetwork: true });
            } else {
                State.update({ wrongNetwork: false });
            }
        });
}

function multicall(calls, value) {
    console.log("gmxRouterContract", gmxRouterContract);
    console.log("multicall made", calls);
    const encodedCalls = calls.map((call) =>
        gmxRouterContract.interface.encodeFunctionData(call.method, call.params)
    );
    console.log("encodedCalls", encodedCalls);
    return gmxRouterContract["multicall"](encodedCalls, { value: value });
}

function handleClickSubmitOrder() {
    if (wrongNetwork) {
        try {
            const chainIdHex = `0x${(ARBITRUM_GOERLI_CHAINID).toString(16)}`;
            Ethers.send("wallet_switchEthereumChain", [
                { chainId: chainIdHex },
            ]);
        } catch (e) {
            console.log(e);
        }
        return;
    }
    let priceWithPadding;
    if (isLong) {
        priceWithPadding = ethers.BigNumber.from(maxPrice).mul(101).div(100); // Multiply by 1.01
    } else {
        priceWithPadding = ethers.BigNumber.from(minPrice).mul(99).div(100); // Multiply by 0.99
    }
    const acceptablePriceBigNumber = priceWithPadding;

    const calls = [
        {
            method: "sendWnt",
            params: [ETH_ORDERVAULT_ADDRESS, ethers.utils.parseUnits(payAmount, 18)],
        },
        {
            method: "createOrder",
            params: [
                {
                    addresses: {
                        receiver: sender,
                        initialCollateralToken: WETH_TOKEN_ADDRESS,
                        callbackContract: ZERO_ADDRESS,
                        market: MARKET_ADDRESS,
                        swapPath: [
                            MARKET_ADDRESS,
                            // SWAP_PATH_ADDRESS_1,
                            // SWAP_PATH_ADDRESS_2,
                        ],
                        uiFeeReceiver: ZERO_ADDRESS,
                    },
                    numbers: {
                        sizeDeltaUsd: {
                            type: "BigNumber",
                            hex: "0x08c4bf5ec6c3b8c6583a3603a800",
                        },
                        initialCollateralDeltaAmount: {
                            type: "BigNumber",
                            hex: "0x00",
                        },
                        triggerPrice: {
                            type: "BigNumber",
                            hex: "0x00",
                        },
                        acceptablePrice: acceptablePriceBigNumber,
                        executionFee: {
                            type: "BigNumber",
                            hex: "0x028a49e903b000",
                        },
                        callbackGasLimit: {
                            type: "BigNumber",
                            hex: "0x00",
                        },
                        minOutputAmount: {
                            type: "BigNumber",
                            hex: "0x00",
                        },
                    },
                    orderType: 2,
                    decreasePositionSwapType: 0,
                    isLong: isLong,
                    shouldUnwrapNativeToken: true,
                    referralCode:
                        "0x0000000000000000000000000000000000000000000000000000000000000000",
                },
            ],
        },
    ];

    multicall(calls, ethers.utils.parseUnits(payAmount, 18));
}

function handleClickMax() {
    State.update({
        payAmount: (balance * 0.9).toFixed(4) || "0.0",
    });
}

function handleChangePayAmount(e) {
    if (e.target.value === "." && !payAmount) {
        State.update({
            payAmount: "0.",
        });
    }
    if (isNaN(e.target.value)) {
        return;
    }

    State.update({
        payAmount: e.target.value,
    });
}

/// LEVERAGE
const leverageShortcuts = [2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function handleChangeLeverage(e) {
    State.update({
        leverage: Number(e.target.value),
    });
}

/// POSITION
function handleChangePosition(isLong) {
    State.update({
        isLong: isLong,
    });
}

return (
    <DaisyUIWrapper>
        {"wrongNetwork?:" + wrongNetwork}
        <div class="card bg-neutral-focus text-white">
            <div class="px-4 pt-4">
                <div class="flex justify-center">
                    <LogoGMX />
                </div>
                <div class="flex join pt-4">
                    <button
                        class={`btn join-item w-1/2 rounded-r-none ${isLong
                            ? "bg-blue-700 hover:bg-blue-700 focus:bg-blue-700"
                            : "bg-indigo-900 hover:bg-indigo-900 focus:bg-indigo-900"
                            }`}
                        onClick={() => handleChangePosition(true)}
                    >
                        <div class="flex items-center gap-2 normal-case">
                            <IconLong />
                            Long
                        </div>
                    </button>
                    <button
                        class={`btn join-item w-1/2 rounded-l-none ${!isLong
                            ? "bg-blue-700 hover:bg-blue-700 focus:bg-blue-700"
                            : "bg-indigo-900 hover:bg-indigo-900 focus:bg-indigo-900"
                            }`}
                        onClick={() => handleChangePosition(false)}
                    >
                        <div class="flex items-center gap-2 normal-case">
                            <IconShort />
                            Short
                        </div>
                    </button>
                </div>

                <label class="label">
                    <span class="label-text text-lg">Market</span>
                </label>

                <div class="bg-indigo-900 rounded p-2 mb-2">
                    <label class="label pl-4">
                        <span class="label-text text-gray-500">Pay{payValueDisplay}</span>
                        <span class="label-text text-gray-500">
                            Balance:
                            <span class="text-white">{Number(balance || 0).toFixed(4)}</span>
                        </span>
                    </label>
                    <div class="flex">
                        <input
                            class="input w-full bg-indigo-900 text-2xl focus:outline-none"
                            onChange={(e) => handleChangePayAmount(e)}
                            value={payAmount}
                            placeholder="0.0"
                        />
                        <div class="flex items-center space-x-1">
                            {balance > 0 && (
                                <button
                                    class="btn btn-sm border-none font-normal rounded-1 px-2 mx-1 bg-blue-700 hover:bg-blue-700 focus:bg-blue-700"
                                    onClick={handleClickMax}
                                >
                                    MAX
                                </button>
                            )}
                            <IconETH />
                            <select disabled class="select-ghost bg-indigo-900 text-2xl">
                                <option disabled selected>
                                    ETH
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="bg-indigo-900 rounded p-2">
                    <label class="label pl-4 pr-2">
                        <span class="label-text text-gray-500">
                            {isLong ? "Long" : "Short"}
                            {leveragedValueDisplay}
                        </span>
                        <span class="label-text">
                            <span class="text-gray-500">Leverage: </span>
                            {leverage.toFixed(2)}x
                        </span>
                    </label>
                    <div class="flex">
                        <input
                            class="input w-full bg-indigo-900 text-2xl focus:outline-none"
                            value={leverageAmount && `~${leverageAmount}`}
                            placeholder="0.0"
                        />
                        <div class="flex items-center space-x-1">
                            <IconETH />
                            <select disabled class="select-ghost bg-indigo-900 text-2xl">
                                <option disabled selected>
                                    ETH
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="py-2">
                    <label class="label">
                        <span class="label-text text-gray-500">Leverage slider</span>
                    </label>

                    <input
                        class="range range-xs"
                        onChange={(e) => handleChangeLeverage(e)}
                        type="range"
                        min={1.1}
                        max={50}
                        value={leverage}
                        step={0.1}
                    />

                    <div class="flex justify-between flex-wrap pl-3">
                        {leverageShortcuts.map((value) => {
                            return (
                                <button
                                    class="btn-xs p-0 text-gray-500 hover:text-white"
                                    onClick={() => {
                                        State.update({ leverage: value });
                                    }}
                                >
                                    {value + "x"}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <label class="label py-0">
                    <span class="label-text text-gray-500">Pool</span>
                    <span class="label-text">WETH-USDC</span>
                </label>
                <label class="label py-0">
                    <span class="label-text text-gray-500">Collateral In</span>
                    <span class="label-text">USDC</span>
                </label>
            </div>

            <div class="divider my-1" />

            <div class="px-4">
                <label class="label py-0">
                    <span class="label-text text-gray-500">Leverage</span>
                    <span class="label-text">{`${leverage.toFixed(2)}x`}</span>
                </label>
                <label class="label py-0">
                    <span class="label-text text-gray-500">Entry Price</span>
                    <span class="label-text">{entryPriceDisplay}</span>
                </label>
            </div>

            <div class="divider my-1" />

            <div class="px-4 pb-4">
                <label class="label pt-0 pb-1">
                    <span class="label-text text-gray-500">Estimated Fees</span>
                    <span class="label-text">{feeValueDisplay}</span>
                </label>

                {sender ? (
                    <button
                        class="btn w-full bg-blue-700 hover:bg-indigo-500 focus:bg-indigo-500 mt-2"
                        onClick={handleClickSubmitOrder}
                    >
                        {wrongNetwork ? "Switch Network" : isLong ? "Long ETH" : "Short ETH"}
                    </button>
                ) : (
                    <button
                        disabled={sender && payAmount <= 0}
                        class="relative btn w-full bg-blue-700 hover:bg-indigo-500 focus:bg-indigo-500 mt-2"
                    >
                        Connect Wallet
                        <Web3Connect
                            className="opacity-0 absolute w-full h-full"
                            connectLabel="Connect with Web3"
                        />
                    </button>
                )}
            </div>
        </div>
    </DaisyUIWrapper>
);
