import { connectDb } from "../../../utls/database";
import { product } from "../../../model/product";
const data1 = [
  {
    id: 314,
    uid: "5d34b9af-f4c4-4a79-a447-794d2f5777a6",
    password: "ZhjFEm4AHz",
    first_name: "Nikita",
    last_name: "Green",
    username: "nikita.green",
    email: "nikita.green@email.com",
    avatar: "https://robohash.org/quaedoloribusaut.png?size=300x300&set=set1",
    gender: "Genderfluid",
    phone_number: "+243 (513) 895-4139 x796",
    social_insurance_number: "902670553",
    date_of_birth: "1987-07-01",
    employment: {
      title: "Central Sales Orchestrator",
      key_skill: "Leadership",
    },
    address: {
      city: "Koeppburgh",
      street_name: "Dustin Parks",
      street_address: "44977 Ronnie Coves",
      zip_code: "32127",
      state: "Maryland",
      country: "United States",
      coordinates: {
        lat: -37.077958334144114,
        lng: 159.43494129797767,
      },
    },
    credit_card: {
      cc_number: "5471-6328-6566-0988",
    },
    subscription: {
      plan: "Diamond",
      status: "Active",
      payment_method: "Credit card",
      term: "Annual",
    },
  },
  {
    id: 5635,
    uid: "9a6a31c5-bbff-4899-8ebc-a4c515eb1922",
    password: "XN9DH3wLeb",
    first_name: "Elaina",
    last_name: "Larkin",
    username: "elaina.larkin",
    email: "elaina.larkin@email.com",
    avatar: "https://robohash.org/quoseddignissimos.png?size=300x300&set=set1",
    gender: "Agender",
    phone_number: "+66 581.049.4630 x47503",
    social_insurance_number: "434491718",
    date_of_birth: "1975-12-07",
    employment: {
      title: "Human Real-Estate Designer",
      key_skill: "Organisation",
    },
    address: {
      city: "West Edward",
      street_name: "Tawana Parks",
      street_address: "74718 Quitzon Garden",
      zip_code: "00716-5706",
      state: "Kentucky",
      country: "United States",
      coordinates: {
        lat: -22.632986708242314,
        lng: -45.24635452444181,
      },
    },
    credit_card: {
      cc_number: "4149826292550",
    },
    subscription: {
      plan: "Basic",
      status: "Blocked",
      payment_method: "Credit card",
      term: "Monthly",
    },
  },
  {
    id: 2697,
    uid: "9dc09afa-6738-43e0-97ca-61c2df33d50b",
    password: "4FdC7vT9sH",
    first_name: "Krysten",
    last_name: "Reilly",
    username: "krysten.reilly",
    email: "krysten.reilly@email.com",
    avatar: "https://robohash.org/vitaetemporanulla.png?size=300x300&set=set1",
    gender: "Female",
    phone_number: "+689 1-876-339-0124 x15245",
    social_insurance_number: "121295554",
    date_of_birth: "1968-05-03",
    employment: {
      title: "Hospitality Executive",
      key_skill: "Fast learner",
    },
    address: {
      city: "Danaberg",
      street_name: "Hickle Branch",
      street_address: "696 Lowell Islands",
      zip_code: "28877-2320",
      state: "Montana",
      country: "United States",
      coordinates: {
        lat: -50.42435172712742,
        lng: 152.7325806873996,
      },
    },
    credit_card: {
      cc_number: "5575-6115-9045-8384",
    },
    subscription: {
      plan: "Standard",
      status: "Active",
      payment_method: "Visa checkout",
      term: "Full subscription",
    },
  },
];

export default async function productlistHandler(req, res) {
  // connect the db
  await connectDb();
  // fetch product from db
  const productList = await product.find({});

  res.status(200).json({ success: true, data: productList });
}
