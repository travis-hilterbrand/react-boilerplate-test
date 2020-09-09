export interface SetTestPayload {
  test: string;
}
/* --- STATE --- */
export interface ListUsersState {
  test: string;
  mountCount: number;
}

export type ContainerState = ListUsersState;
