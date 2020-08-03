export type TPicture = {
  url: string;
  width: number;
  height: number;
};

interface ISlider {
  label: string;
  color: string;
  title: string;
  description: string;
  picture: TPicture;
}

export const sliders = [
  {
    label: "Relaxed",
    color: "#BFFAF5",
    title: "Find Your Outfits",
    description:
      "Confused about your outfit? Don’t worry! Find the best outfit here!",
    picture: {
      url: require("../../assets/images/slider/1.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    label: "Playful",
    color: "#BEECC4",
    title: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    picture: {
      url: require("../../assets/images/slider/2.png"),
      width: 2791,
      height: 3744,
    },
  },
  {
    label: "Excentric",
    color: "#FFE4D9",
    title: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    picture: {
      url: require("../../assets/images/slider/3.png"),
      width: 2738,
      height: 3244,
    },
  },
  {
    label: "Funky",
    color: "#FFDDDD",
    title: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    picture: {
      url: require("../../assets/images/slider/3.png"),
      width: 1757,
      height: 2555,
    },
  },
  {
    label: "Funky",
    color: "#FFDDDD",
    title: "Let’s get started",
    icon: require("../../assets/images/slider/4.png"),
    description:
      "Login to your account below or signup for an amazing experience",
  },
];
