import { CHECKIN_STATUS, ChristianPerson, Group, PersonCheckin, PersonGroupMapping, Role } from "./dtos";

export const MOCK_PERSONS: ChristianPerson[] = [
  {
    id: "1",
    christianName: "Giuse",
    firstName: "Nguyen Van",
    lastName: "A",
    gender: "male",
    birth: new Date("01-01-1989"),
    role: "Con",
  },
  {
    id: "2",
    christianName: "Maria",
    firstName: "Pham Thi",
    lastName: "B",
    gender: "female",
    birth: new Date("01-01-1992"),
    role: "Phụ huynh",
  },
  {
    id: "3",
    christianName: "Giuse",
    firstName: "Nguyen Van",
    lastName: "C",
    gender: "male",
    birth: new Date("01-01-2010"),
    role: "Phụ huynh",
  },
];

export const MOCK_GROUP: Group[] = [{ id: "1", name: "Gia dinh 1" }];

export const MOCK_GROUP_MAPPING: PersonGroupMapping[] = [
  { id: "1", groupId: "1", personId: "1", roleCode: "PARENT" },
  { id: "2", groupId: "1", personId: "2", roleCode: "PARENT" },
  { id: "3", groupId: "1", personId: "3", roleCode: "CHILDREN" },
];

export const MOCK_ROLE: Role[] = [
  { id: "1", code: "PARENT", name: "Phu huynh", desc: "" },
  { id: "2", code: "CHILDREN", name: "Con", desc: "" },
];

export const MOCK_CHECKIN_LIST: PersonCheckin[] = [
  { id: "1", date: new Date(), personId: "1", status: CHECKIN_STATUS.UNCHECK, note: "note1" },
  { id: "2", date: new Date(), personId: "2", status: CHECKIN_STATUS.UNCHECK },
  { id: "3", date: new Date(), personId: "3", status: CHECKIN_STATUS.UNCHECK, note: "note note" },
  { id: "4", date: new Date(), personId: "1", status: CHECKIN_STATUS.UNCHECK },
];
