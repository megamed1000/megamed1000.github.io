const user: User = {
  name: "Hayes",
  id: 0,
};

interface User {
  name: string;
  id: number;
  a?: string;
}
type MyType = string | User;

let a: number = 3443;

const x: User = {
  name: "John",
  id: 30,
};
