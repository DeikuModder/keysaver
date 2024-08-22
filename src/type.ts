export interface userInformation {
  username: string;
  password: string;
}

export interface SecurityQuestions {
  question1: string;
  answer1: string;
  question2: string;
  answer2: string;
  question3: string;
  answer3: string;
}

export interface PasswordItem {
  id?: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  periodicity:
    | "very often"
    | "often"
    | "not so often"
    | "rarely used"
    | "once a year"
    | "";
  password: string;
  icon: string;
  lastModified: string;
}
