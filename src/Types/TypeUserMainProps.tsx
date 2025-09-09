import type InterfaceUser from "../interfaces/InterfaceUser"

export type TypeUserMainProps = {
  users: InterfaceUser[]
  selectUser(id:string): void
}

