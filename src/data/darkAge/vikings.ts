import { images } from "../../assets/images";
import { Dice } from "../../types";

export default {
  icons: {
    [Dice.small]: images.vikingsSmallIcon,
    [Dice.middle]: images.vikingsMiddleIcon,
    [Dice.big]: images.vikingsBigIcon,
  },
  iconBackgroundColor: "#dbd59c",
  activation: [
    {
      label: "HIRDMAN",
      rule: "Activation",
      text: "Activate a unit of Hearthguard or a Hero",
      price: [Dice.small, Dice.middle, Dice.big],
    },
    {
      label: "BONDI",
      rule: "Activation",
      text: "Activate a unit of Warriors",
      price: [Dice.small, Dice.big],
    },
    {
      label: "THRALLS",
      rule: "Activation",
      text: "Activate a unit of Levies",
      price: [Dice.middle, Dice.big],
    },
    {
      label: "COMBAT BONUS",
      rule: "Melle, Shooting or Shooting/Reaction",
      text: "Gain 1 attack or deffence price (2 if you used S)",
      price: [Dice.small, Dice.middle, Dice.big],
    },
    {
      label: "ACTIVATE POOL",
      rule: "Orders",
      text: "Take 2 your price, roll them and add them to your inactive Saga price",
      price: [Dice.big],
    },
  ],
  skills: [
    {
      label: "NJORD",
      rule: "Activation",
      text: "Remove a fatigue from each unit within M of your Warlord",
      price: [Dice.big],
    },
    {
      label: "FRIGG",
      rule: "Melee",
      text: "Remove a fatige from your unit OR gain 3 attack price",
      price: [Dice.middle, Dice.big],
    },
    {
      label: "HEIMDALL",
      rule: "Melee",
      text: "Reduce your unit's Armour by 1 to gain 5 attack dice.",
      price: [Dice.middle],
    },
    {
      label: "ODIN",
      rule: "Shooting/Reaction",
      text: "The shooting unit takes as much fatigue as necessary for it to become exhausted.",
      price: [Dice.middle, Dice.middle],
      plus: true,
    },
    {
      label: "ASGARD",
      rule: "Activation/Reaction",
      text: "Triggered after a unit has been activated to change but before the charge is resolved. Remove fatigue from one of your units.",
      price: [Dice.small],
    },
    {
      label: "THOR",
      rule: "Melee",
      text: "Inflict an extra automatic hit for each 6 or more rolled on your attack dice.",
      price: [Dice.small],
    },
    {
      label: "ULLR",
      rule: "Melee",
      text: "You may re-roll all your attack dice which do not  score a hit.",
      price: [Dice.middle, Dice.small],
      plus: true,
    },

    {
      label: "LOKI",
      rule: "Melee",
      text: "Unit the end of the melee gain 2 attack dice each time the enemy unit triggers a Saga ability or users one of your fatigues.",
      price: [Dice.middle],
    },
    {
      label: "VALHALLA",
      rule: "Melee",
      text: "Remove 1 to 3 Warrior or Hearthguard figures from your unit. Gain 3 attack dice per per figure removed (4 if you used S)",
      price: [Dice.small, Dice.middle, Dice.big],
    },
    {
      label: "RAGNAROK",
      rule: "Orders",
      text: "Unit the end of the turn:\n*The MElee Armour of ALL units is reduced by 1.\n*All your charges are free activations\n*VALHALLA becomes a basic Saga ability",
      price: [Dice.big, Dice.big],
      plus: true,
    },
  ],
};
