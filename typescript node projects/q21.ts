interface Obj {
  name: string;
  id: string;
  phoneNumber?: string;
}

const tsObj: Obj = {
  name: "name",
  id: crypto.randomUUID(),
  phoneNumber: "789456123"
};

console.log(tsObj);
export {};
