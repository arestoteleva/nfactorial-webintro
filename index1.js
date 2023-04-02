const customerName = "Aruzhan";
const cAddress = "Almaty";

const pickle = {
  id: 1,
  price: 500,
  name: "pickle",
  type: "vegetable",
  eatable: true,
  amount: 4,
  art6: 666,
};

const apple = {
  id: 2,
  price: 1250,
  name: "apple",
  type: "fruit",
  eatable: true,
  amount: 1,
  left: 100,
};

const PricePickle = pickle.price * pickle.amount ;
const PriceApple = apple.amount * apple.price;

console.log(`New Order from Aruzhan, purchased ${pickle.amount} vegs and ${apple.amount}. Total price ${PricePickle + PriceApple}, Destitation addres: ${cAddress}`);
    // * New Order from Aruzhan, purchased 4 vegs and 1 fruit. Total price: 3250, Destination address: Almaty

    const merge (...apple,...pickle);
    console.log(merge);