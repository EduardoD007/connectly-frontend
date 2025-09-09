import InterfaceUser from "./InterfaceUser";


interface InterfaceUserState {
  allUsers: InterfaceUser[]
  selectedUser: InterfaceUser[]
  following: string
  status: string
  erro: string | null
}

export default InterfaceUserState;