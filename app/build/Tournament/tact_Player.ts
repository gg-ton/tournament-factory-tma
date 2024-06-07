import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type SetTeamRequest = {
    $$type: 'SetTeamRequest';
    team: Address;
}

export function storeSetTeamRequest(src: SetTeamRequest) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(38008625, 32);
        b_0.storeAddress(src.team);
    };
}

export function loadSetTeamRequest(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 38008625) { throw Error('Invalid prefix'); }
    let _team = sc_0.loadAddress();
    return { $$type: 'SetTeamRequest' as const, team: _team };
}

function loadTupleSetTeamRequest(source: TupleReader) {
    let _team = source.readAddress();
    return { $$type: 'SetTeamRequest' as const, team: _team };
}

function storeTupleSetTeamRequest(source: SetTeamRequest) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.team);
    return builder.build();
}

function dictValueParserSetTeamRequest(): DictionaryValue<SetTeamRequest> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSetTeamRequest(src)).endCell());
        },
        parse: (src) => {
            return loadSetTeamRequest(src.loadRef().beginParse());
        }
    }
}

export type TeamInfo = {
    $$type: 'TeamInfo';
    name: string;
    owner: Address;
    seqno: bigint;
    maxParticipantCount: bigint;
}

export function storeTeamInfo(src: TeamInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.name);
        b_0.storeAddress(src.owner);
        b_0.storeUint(src.seqno, 64);
        b_0.storeUint(src.maxParticipantCount, 32);
    };
}

export function loadTeamInfo(slice: Slice) {
    let sc_0 = slice;
    let _name = sc_0.loadStringRefTail();
    let _owner = sc_0.loadAddress();
    let _seqno = sc_0.loadUintBig(64);
    let _maxParticipantCount = sc_0.loadUintBig(32);
    return { $$type: 'TeamInfo' as const, name: _name, owner: _owner, seqno: _seqno, maxParticipantCount: _maxParticipantCount };
}

function loadTupleTeamInfo(source: TupleReader) {
    let _name = source.readString();
    let _owner = source.readAddress();
    let _seqno = source.readBigNumber();
    let _maxParticipantCount = source.readBigNumber();
    return { $$type: 'TeamInfo' as const, name: _name, owner: _owner, seqno: _seqno, maxParticipantCount: _maxParticipantCount };
}

function storeTupleTeamInfo(source: TeamInfo) {
    let builder = new TupleBuilder();
    builder.writeString(source.name);
    builder.writeAddress(source.owner);
    builder.writeNumber(source.seqno);
    builder.writeNumber(source.maxParticipantCount);
    return builder.build();
}

function dictValueParserTeamInfo(): DictionaryValue<TeamInfo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTeamInfo(src)).endCell());
        },
        parse: (src) => {
            return loadTeamInfo(src.loadRef().beginParse());
        }
    }
}

export type VictoryRequest = {
    $$type: 'VictoryRequest';
    player: Address;
}

export function storeVictoryRequest(src: VictoryRequest) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3356721572, 32);
        b_0.storeAddress(src.player);
    };
}

export function loadVictoryRequest(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3356721572) { throw Error('Invalid prefix'); }
    let _player = sc_0.loadAddress();
    return { $$type: 'VictoryRequest' as const, player: _player };
}

function loadTupleVictoryRequest(source: TupleReader) {
    let _player = source.readAddress();
    return { $$type: 'VictoryRequest' as const, player: _player };
}

function storeTupleVictoryRequest(source: VictoryRequest) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.player);
    return builder.build();
}

function dictValueParserVictoryRequest(): DictionaryValue<VictoryRequest> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeVictoryRequest(src)).endCell());
        },
        parse: (src) => {
            return loadVictoryRequest(src.loadRef().beginParse());
        }
    }
}

export type VictoryResponse = {
    $$type: 'VictoryResponse';
    teamInfo: TeamInfo;
}

export function storeVictoryResponse(src: VictoryResponse) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(263955624, 32);
        b_0.store(storeTeamInfo(src.teamInfo));
    };
}

export function loadVictoryResponse(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 263955624) { throw Error('Invalid prefix'); }
    let _teamInfo = loadTeamInfo(sc_0);
    return { $$type: 'VictoryResponse' as const, teamInfo: _teamInfo };
}

function loadTupleVictoryResponse(source: TupleReader) {
    const _teamInfo = loadTupleTeamInfo(source.readTuple());
    return { $$type: 'VictoryResponse' as const, teamInfo: _teamInfo };
}

function storeTupleVictoryResponse(source: VictoryResponse) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleTeamInfo(source.teamInfo));
    return builder.build();
}

function dictValueParserVictoryResponse(): DictionaryValue<VictoryResponse> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeVictoryResponse(src)).endCell());
        },
        parse: (src) => {
            return loadVictoryResponse(src.loadRef().beginParse());
        }
    }
}

export type AddTeamParticipantRequest = {
    $$type: 'AddTeamParticipantRequest';
    player: Address;
}

export function storeAddTeamParticipantRequest(src: AddTeamParticipantRequest) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2048823914, 32);
        b_0.storeAddress(src.player);
    };
}

export function loadAddTeamParticipantRequest(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2048823914) { throw Error('Invalid prefix'); }
    let _player = sc_0.loadAddress();
    return { $$type: 'AddTeamParticipantRequest' as const, player: _player };
}

function loadTupleAddTeamParticipantRequest(source: TupleReader) {
    let _player = source.readAddress();
    return { $$type: 'AddTeamParticipantRequest' as const, player: _player };
}

function storeTupleAddTeamParticipantRequest(source: AddTeamParticipantRequest) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.player);
    return builder.build();
}

function dictValueParserAddTeamParticipantRequest(): DictionaryValue<AddTeamParticipantRequest> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeAddTeamParticipantRequest(src)).endCell());
        },
        parse: (src) => {
            return loadAddTeamParticipantRequest(src.loadRef().beginParse());
        }
    }
}

export type CreateTournamentRequest = {
    $$type: 'CreateTournamentRequest';
    prizePool: bigint;
    maxParticipantCount: bigint;
}

export function storeCreateTournamentRequest(src: CreateTournamentRequest) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1716319573, 32);
        b_0.storeInt(src.prizePool, 257);
        b_0.storeUint(src.maxParticipantCount, 16);
    };
}

export function loadCreateTournamentRequest(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1716319573) { throw Error('Invalid prefix'); }
    let _prizePool = sc_0.loadIntBig(257);
    let _maxParticipantCount = sc_0.loadUintBig(16);
    return { $$type: 'CreateTournamentRequest' as const, prizePool: _prizePool, maxParticipantCount: _maxParticipantCount };
}

function loadTupleCreateTournamentRequest(source: TupleReader) {
    let _prizePool = source.readBigNumber();
    let _maxParticipantCount = source.readBigNumber();
    return { $$type: 'CreateTournamentRequest' as const, prizePool: _prizePool, maxParticipantCount: _maxParticipantCount };
}

function storeTupleCreateTournamentRequest(source: CreateTournamentRequest) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.prizePool);
    builder.writeNumber(source.maxParticipantCount);
    return builder.build();
}

function dictValueParserCreateTournamentRequest(): DictionaryValue<CreateTournamentRequest> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCreateTournamentRequest(src)).endCell());
        },
        parse: (src) => {
            return loadCreateTournamentRequest(src.loadRef().beginParse());
        }
    }
}

export type JoinTournamentRequest = {
    $$type: 'JoinTournamentRequest';
}

export function storeJoinTournamentRequest(src: JoinTournamentRequest) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3746790198, 32);
    };
}

export function loadJoinTournamentRequest(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3746790198) { throw Error('Invalid prefix'); }
    return { $$type: 'JoinTournamentRequest' as const };
}

function loadTupleJoinTournamentRequest(source: TupleReader) {
    return { $$type: 'JoinTournamentRequest' as const };
}

function storeTupleJoinTournamentRequest(source: JoinTournamentRequest) {
    let builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserJoinTournamentRequest(): DictionaryValue<JoinTournamentRequest> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeJoinTournamentRequest(src)).endCell());
        },
        parse: (src) => {
            return loadJoinTournamentRequest(src.loadRef().beginParse());
        }
    }
}

export type StartTournamentRequest = {
    $$type: 'StartTournamentRequest';
}

export function storeStartTournamentRequest(src: StartTournamentRequest) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3527733694, 32);
    };
}

export function loadStartTournamentRequest(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3527733694) { throw Error('Invalid prefix'); }
    return { $$type: 'StartTournamentRequest' as const };
}

function loadTupleStartTournamentRequest(source: TupleReader) {
    return { $$type: 'StartTournamentRequest' as const };
}

function storeTupleStartTournamentRequest(source: StartTournamentRequest) {
    let builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserStartTournamentRequest(): DictionaryValue<StartTournamentRequest> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStartTournamentRequest(src)).endCell());
        },
        parse: (src) => {
            return loadStartTournamentRequest(src.loadRef().beginParse());
        }
    }
}

export type FinishTournamentRequest = {
    $$type: 'FinishTournamentRequest';
    winner: Address;
}

export function storeFinishTournamentRequest(src: FinishTournamentRequest) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2132003049, 32);
        b_0.storeAddress(src.winner);
    };
}

export function loadFinishTournamentRequest(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2132003049) { throw Error('Invalid prefix'); }
    let _winner = sc_0.loadAddress();
    return { $$type: 'FinishTournamentRequest' as const, winner: _winner };
}

function loadTupleFinishTournamentRequest(source: TupleReader) {
    let _winner = source.readAddress();
    return { $$type: 'FinishTournamentRequest' as const, winner: _winner };
}

function storeTupleFinishTournamentRequest(source: FinishTournamentRequest) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.winner);
    return builder.build();
}

function dictValueParserFinishTournamentRequest(): DictionaryValue<FinishTournamentRequest> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFinishTournamentRequest(src)).endCell());
        },
        parse: (src) => {
            return loadFinishTournamentRequest(src.loadRef().beginParse());
        }
    }
}

 type Player_init_args = {
    $$type: 'Player_init_args';
    owner: Address;
}

function initPlayer_init_args(src: Player_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
    };
}

async function Player_init(owner: Address) {
    const __code = Cell.fromBase64('te6ccgECFwEAA5sAART/APSkE/S88sgLAQIBYgIDA3jQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4IIPBAUCASAKCwL2AZIwf+BwIddJwh+VMCDXCx/eIIIKQ/cxuo4vMNMfAYIKQ/cxuvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxMn/gghCUapi2uo6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/BgcAlsj4QwHMfwHKAFlZINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsntVAE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwIAAbgMHAByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBWAwNAgEgExQCEbSju2ebZ42EMA8OAhG3oftnm2eNhDAPEAACIAH27UTQ1AH4Y9IAAY5C+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEmwS4Pgo1wsKgwm68uCJ+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHREQACIQEE2zwSAF5wIMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAQDdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwQM51aecV+dJQsB1hbiZHsoAgFIFRYAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtY2trZUtMcGhFWHptNGF5bUhiZzFQbU1hbjV3clFKUmpSN0dzUXY2MlVyVXiCA=');
    const __system = Cell.fromBase64('te6cckECGQEAA6UAAQHAAQEFoEMtAgEU/wD0pBP0vPLICwMCAWIECwN40AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wts88uCCEAUKAvYBkjB/4HAh10nCH5UwINcLH94gggpD9zG6ji8w0x8BggpD9zG68uCB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiDEyf+CCEJRqmLa6jqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH8GCQE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwHAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAgAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwABuAwcACWyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wye1UAgEgDBQCAVgNDwIRtKO7Z5tnjYQwEA4AAiACEbeh+2ebZ42EMBATAfbtRNDUAfhj0gABjkL6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBLg+CjXCwqDCbry4In6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdERAQTbPBIAXnAgyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBAAIhAgEgFRYA3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcEDOdWnnFfnSULAdYW4mR7KAIBSBcYABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbWNra2VLTHBoRVh6bTRheW1IYmcxUG1NYW41d3JRSlJqUjdHc1F2NjJVclV4ggdpLqJw==');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initPlayer_init_args({ $$type: 'Player_init_args', owner })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Player_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    1876: { message: `Can't start tournament without participants` },
    37305: { message: `This winner doesn't exsist` },
    39445: { message: `Tournament already started` },
    41585: { message: `Winner can't be inantive` },
    55838: { message: `Tournament has max participants count` },
    63697: { message: `Tournament already finished` },
}

const Player_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SetTeamRequest","header":38008625,"fields":[{"name":"team","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TeamInfo","header":null,"fields":[{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"maxParticipantCount","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
    {"name":"VictoryRequest","header":3356721572,"fields":[{"name":"player","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"VictoryResponse","header":263955624,"fields":[{"name":"teamInfo","type":{"kind":"simple","type":"TeamInfo","optional":false}}]},
    {"name":"AddTeamParticipantRequest","header":2048823914,"fields":[{"name":"player","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"CreateTournamentRequest","header":1716319573,"fields":[{"name":"prizePool","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"maxParticipantCount","type":{"kind":"simple","type":"uint","optional":false,"format":16}}]},
    {"name":"JoinTournamentRequest","header":3746790198,"fields":[]},
    {"name":"StartTournamentRequest","header":3527733694,"fields":[]},
    {"name":"FinishTournamentRequest","header":2132003049,"fields":[{"name":"winner","type":{"kind":"simple","type":"address","optional":false}}]},
]

const Player_getters: ABIGetter[] = [
    {"name":"team","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const Player_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"SetTeamRequest"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Player implements Contract {
    
    static async init(owner: Address) {
        return await Player_init(owner);
    }
    
    static async fromInit(owner: Address) {
        const init = await Player_init(owner);
        const address = contractAddress(0, init);
        return new Player(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Player(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Player_types,
        getters: Player_getters,
        receivers: Player_receivers,
        errors: Player_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: SetTeamRequest | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetTeamRequest') {
            body = beginCell().store(storeSetTeamRequest(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getTeam(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('team', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}