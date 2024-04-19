import {
    icon1,
    icon2,
    icon3,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
} from "../assets"

const Icons = [
    {
        name: "first",
        icon: logo1,
    },
    {
        name: "second",
        icon: logo2,
    },
    {
        name: "third",
        icon: logo3,
     },
    {
        name: "fourth",
        icon: logo4,
    },
    {
        name: "fifth",
        icon: logo5,
    },
];

const services = [

    {
        name: "benchmarks",
        icon: icon1,
        header: "Benchmarks",
        para: "The process of measuring and baselining the performance of your codel"
    },
    {
        name: "pricing",
        icon: icon2,
        header: "Pricing Audit",
        para: "Benchmark the health of your monetization and pricing strategy."
    },
    {
        name: "retention",
        icon: icon3,
        header: "Retention Audit",
        para: "Audit where revenue leakage exists and where you can increase retention.",
    }
]

const plans = [
    {
        title: "Starter",
        price: "Free",
        specs: [
            "1 email a week",
            "No practice questions",
            "Limited Support",
        ],
        button: "Get Started",
    },
    {
        title: "Premium",
        price: "£29/month",
        specs: [
          "10 emails a week",
          "15 practice questions",
          "Premium Support",
        ], 
        button: "Get Started",
      },
      {
        title: "Enterprise",
        price: "£49/month",
        specs: [
          "Live Q&A sessions",
          "Unlimited practice questions",
          "Premium Support",
        ], 
        button:"Get Started",
      }
]

const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "pricing",
      title: "Pricing",
    },
    {
      id: "blog",
      title: "Blog",
    },
  ];

export {
    Icons,
    services,
    plans,
    navLinks,
}