# TACT Compilation Report
Contract: Tournament
BOC Size: 2244 bytes

# Types
Total Types: 18

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## CreateTournamentRequest
TLB: `create_tournament_request#664cf555 prizePool:int257 maxParticipantCount:uint16 = CreateTournamentRequest`
Signature: `CreateTournamentRequest{prizePool:int257,maxParticipantCount:uint16}`

## JoinTournamentRequest
TLB: `join_tournament_request#df537b36  = JoinTournamentRequest`
Signature: `JoinTournamentRequest{}`

## StartTournamentRequest
TLB: `start_tournament_request#d244f1be  = StartTournamentRequest`
Signature: `StartTournamentRequest{}`

## FinishTournamentRequest
TLB: `finish_tournament_request#7f13c8e9 winner:address = FinishTournamentRequest`
Signature: `FinishTournamentRequest{winner:address}`

## ChangeOwner
TLB: `change_owner#819dbe99 queryId:uint64 newOwner:address = ChangeOwner`
Signature: `ChangeOwner{queryId:uint64,newOwner:address}`

## ChangeOwnerOk
TLB: `change_owner_ok#327b2b4a queryId:uint64 newOwner:address = ChangeOwnerOk`
Signature: `ChangeOwnerOk{queryId:uint64,newOwner:address}`

## SetTeamRequest
TLB: `set_team_request#0243f731 team:address = SetTeamRequest`
Signature: `SetTeamRequest{team:address}`

## TeamInfo
TLB: `_ name:^string owner:address seqno:uint64 maxParticipantCount:uint32 = TeamInfo`
Signature: `TeamInfo{name:^string,owner:address,seqno:uint64,maxParticipantCount:uint32}`

## VictoryRequest
TLB: `victory_request#c81381a4 player:address = VictoryRequest`
Signature: `VictoryRequest{player:address}`

## VictoryResponse
TLB: `victory_response#0fbba4a8 teamInfo:TeamInfo{name:^string,owner:address,seqno:uint64,maxParticipantCount:uint32} = VictoryResponse`
Signature: `VictoryResponse{teamInfo:TeamInfo{name:^string,owner:address,seqno:uint64,maxParticipantCount:uint32}}`

## AddTeamParticipantRequest
TLB: `add_team_participant_request#7a1e926a player:address = AddTeamParticipantRequest`
Signature: `AddTeamParticipantRequest{player:address}`

## GameInfo
TLB: `_ name:^string genre:^string = GameInfo`
Signature: `GameInfo{name:^string,genre:^string}`

# Get Methods
Total Get Methods: 10

## seqno

## prizePool

## participants

## participantCount

## maxParticipantCount

## sponsorFunds

## sponsorFundsAmount

## isFinished

## isStarted

## owner

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
1876: Can't start tournament without participants
37305: This winner doesn't exsist
39445: Tournament already started
41585: Winner can't be inantive
55838: Tournament has max participants count
63697: Tournament already finished