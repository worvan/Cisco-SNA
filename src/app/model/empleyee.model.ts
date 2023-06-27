export enum GENDER { "Male", "Female" }

export interface Employee {
  name: string;
  jobTitle: string;
  tenure: string;
  gender: GENDER;
}
