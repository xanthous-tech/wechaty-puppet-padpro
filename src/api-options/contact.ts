import { ApiOption } from './interface'

export const GrpcGetContact: ApiOption = {}

export const GrpcSyncContact: ApiOption = {
  longRequest: true,
}

export const GrpcContactOperation: ApiOption = {}

export const GrpcGetContactQrcode: ApiOption = {
  longRequest: true,
}

export const GrpcAddFriend: ApiOption = {}

export const GrpcAcceptFriend: ApiOption = {}

export const GrpcSearchContact: ApiOption = {
  longRequest: true,
}

export const GrpcShareCard: ApiOption = {
  longRequest: true,
}
