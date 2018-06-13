# Getting Started

## Running a Wanchain Node



### Prerequisites

- go https://golang.org/doc/install


------

### 1. Install go-wanchain

https://github.com/wanchain/go-wanchain

```
$ git clone https://github.com/wanchain/go-wanchain.git
```

```
$ cd go-wanchain
```

```
$ make gwan
```

```
$ sudo nano ~/.bash_profile
```

```
# add the following to the bottom of ~/.bash_profile

alias "gwan=/path/to/go-wanchain/build/bin/gwan" # mac
alias gwan="/path/to/go-wanchain/build/bin/gwan" # linux

```

```
$ CONTROL + c
$ y + enter
```

```
$ source ~/.bash_profile
```


-----


### 2. Run Your Node

##### example 1 - testnet

```
$ gwan --testnet --rpcport 8545 --rpccorsdomain "127.0.0.1" --rpcaddr "127.0.0.1"  --verbosity=0 console
```


##### example 2 - mainnet
```
$ gwan --rpcport 8545 --rpccorsdomain "127.0.0.1" --rpcaddr "127.0.0.1"   --verbosity=0 console
```


HTTP based JSON-RPC API options:

  * `--rpc` Enable the HTTP-RPC server
  * `--rpcaddr` HTTP-RPC server listening interface (default: "localhost")
  * `--rpcport` HTTP-RPC server listening port (default: 8545)
  * `--rpcapi` API's offered over the HTTP-RPC interface (default: "eth,net,web3")
  * `--rpccorsdomain` Comma separated list of domains from which to accept cross origin requests (browser enforced)
  * `--ws` Enable the WS-RPC server
  * `--wsaddr` WS-RPC server listening interface (default: "localhost")
  * `--wsport` WS-RPC server listening port (default: 8546)
  * `--wsapi` API's offered over the WS-RPC interface (default: "eth,net,web3")
  * `--wsorigins` Origins from which to accept websockets requests
  * `--ipcdisable` Disable the IPC-RPC server
  * `--ipcapi` API's offered over the IPC-RPC interface (default: "admin,debug,eth,miner,net,personal,shh,txpool,web3")
  * `--ipcpath` Filename for IPC socket/pipe within the datadir (explicit paths escape it)


----