import React from "react"
import {Landing, About, Services} from "../pages/index"
export const pages = [
  {
    id: 1,
    path: "/",
    text: "Home",
    pageName: <Landing/>
  },
  {
    id: 2,
    path:"/about",
    text: "About",
    pageName: <About/>
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
    pageName: <Services/>
  },
]

export const contact = [
  {

  },
  {

  }
]

export const singles = [
  {
    id: 1,
    title: "Lorem",
    description: "I do something to something for something.",
    price: "$0.22",
  },
  {
    id: 2,
    title: "Ipsum",
    description: "I do something else to something for something.",
    price: "$0.33",
  },
  {
    id: 3,
    title: "Lorey",
    description: "I do something to something for something.",
    price: "$0.22",
  },
  {
    id: 4,
    title: "Ipsey",
    description: "I do something else to something for something.",
    price: "$0.33",
  },
]

export const bundles = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "This is a package of both things from before so i do both things for slightly less than the mix of them.",
    price: "$0.52",
  },
  {
    id: 2,
    title: "Lorem Ipsum 2",
    description: "This is another bundle so it is the same thing but it is can have different products.",
    price: "$0.50"
  },
  {
    id: 1,
    title: "Lorey Ipsey",
    description: "This is a package of both things from before so i do both things for slightly less than the mix of them.",
    price: "$0.52",
  },
  {
    id: 2,
    title: "Lorey Ipsey 2",
    description: "This is another bundle so it is the same thing but it is can have different products.",
    price: "$0.50"
  },
]