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
}

export function storeTeamInfo(src: TeamInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.name);
        b_0.storeAddress(src.owner);
        b_0.storeUint(src.seqno, 64);
    };
}

export function loadTeamInfo(slice: Slice) {
    let sc_0 = slice;
    let _name = sc_0.loadStringRefTail();
    let _owner = sc_0.loadAddress();
    let _seqno = sc_0.loadUintBig(64);
    return { $$type: 'TeamInfo' as const, name: _name, owner: _owner, seqno: _seqno };
}

function loadTupleTeamInfo(source: TupleReader) {
    let _name = source.readString();
    let _owner = source.readAddress();
    let _seqno = source.readBigNumber();
    return { $$type: 'TeamInfo' as const, name: _name, owner: _owner, seqno: _seqno };
}

function storeTupleTeamInfo(source: TeamInfo) {
    let builder = new TupleBuilder();
    builder.writeString(source.name);
    builder.writeAddress(source.owner);
    builder.writeNumber(source.seqno);
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
        b_0.storeUint(4186370460, 32);
        b_0.store(storeTeamInfo(src.teamInfo));
    };
}

export function loadVictoryResponse(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4186370460) { throw Error('Invalid prefix'); }
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

 type Team_init_args = {
    $$type: 'Team_init_args';
    teamInfo: TeamInfo;
}

function initTeam_init_args(src: Team_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.store(storeTeamInfo(src.teamInfo));
    };
}

async function Team_init(teamInfo: TeamInfo) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initTeam_init_args({ $$type: 'Team_init_args', teamInfo })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Team_errors: { [key: number]: { message: string } } = {
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
}

const Team_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SetTeamRequest","header":38008625,"fields":[{"name":"team","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TeamInfo","header":null,"fields":[{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"VictoryRequest","header":3356721572,"fields":[{"name":"player","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"VictoryResponse","header":4186370460,"fields":[{"name":"teamInfo","type":{"kind":"simple","type":"TeamInfo","optional":false}}]},
    {"name":"AddTeamParticipantRequest","header":2048823914,"fields":[{"name":"player","type":{"kind":"simple","type":"address","optional":false}}]},
]

const Team_getters: ABIGetter[] = [
    {"name":"participants","arguments":[],"returnType":{"kind":"dict","key":"address","value":"bool"}},
    {"name":"participantCount","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"seqno","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"name","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"victoryCount","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
]

const Team_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"AddTeamParticipantRequest"}},
    {"receiver":"internal","message":{"kind":"typed","type":"VictoryRequest"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Team implements Contract {
    
    static async init(teamInfo: TeamInfo) {
        return await Team_init(teamInfo);
    }
    
    static async fromInit(teamInfo: TeamInfo) {
        const init = await Team_init(teamInfo);
        const address = contractAddress(0, init);
        return new Team(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Team(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Team_types,
        getters: Team_getters,
        receivers: Team_receivers,
        errors: Team_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: null | AddTeamParticipantRequest | VictoryRequest | Deploy) {
        
        let body: Cell | null = null;
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'AddTeamParticipantRequest') {
            body = beginCell().store(storeAddTeamParticipantRequest(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'VictoryRequest') {
            body = beginCell().store(storeVictoryRequest(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getParticipants(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('participants', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
        return result;
    }
    
    async getParticipantCount(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('participantCount', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getSeqno(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('seqno', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getName(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('name', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getVictoryCount(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('victoryCount', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
}