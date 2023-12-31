type StringOrNumber = string | number;
type objWithName = {name: string, uid: StringOrNumber};

const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of  ${uid}`);
}

const logDetails2 = (uid: StringOrNumber, item: string) => {
    console.log(`${item} has a uid of  ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello!`);
}

