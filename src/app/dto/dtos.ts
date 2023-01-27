export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  birth: Date;
  role?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export interface ChristianPerson extends Person {
  christianName: string;
}

export interface Group {
  id: string;
  name: string;
}

export interface PersonGroupMapping {
  id: string;
  personId: string;
  person?: Person;
  groupId: string;
  group?: Group;
  roleCode: string;
  role?: Role;
}

export interface Role {
  id: string;
  name: string;
  code: string;
  desc: string;
}
export interface PersonCheckin {
  id: string;
  date: Date;
  personId: string;
  person?: Person;
  status: string;
  note?: string;
}

export const CHECKIN_STATUS = {
  PRESENT: "PRESENT",
  ABSENT: "ABSENT",
  ABSENT_PERMITTED: "ABSENT_PERMITTED",
  UNCHECK: "UNCHECK",
};
