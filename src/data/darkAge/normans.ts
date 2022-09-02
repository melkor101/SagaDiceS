import { images } from "../../assets/images";
import { Dice } from "../../types";

export default {
  icons: {
    [Dice.small]: images.normansSmallIcon,
    [Dice.middle]: images.normansMiddleIcon,
    [Dice.big]: images.normansBigIcon,
  },
  iconBackgroundColor: "#dbd59c",
  activation: [
    {
      label: "KNIGHTS",
      rule: "Activation",
      text: "Activate a unit of Hearthguard or a Hero",
      price: [Dice.small, Dice.middle, Dice.big],
    },
    {
      label: "SERGANTS",
      rule: "Activation",
      text: "Activate a unit of Warriors",
      price: [Dice.small, Dice.big],
    },
    {
      label: "FOOTMAN",
      rule: "Activation",
      text: "Activate a unit of Levies",
      price: [Dice.middle, Dice.big],
    },
    {
      label: "COMBAT BONUS",
      rule: "Melle, Shooting or Shooting/Reaction",
      text: "Gain 1 attack or deffence price (2 if you used F)",
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
      label: "CHARGE",
      rule: "Melee",
      text: "Gain 2 dice(4 if you used a F). Yor unit may gain an extra 3 attack dice, but will suffer an extra fatigue at the end of the whole melee if they do.",
      price: [Dice.small, Dice.middle, Dice.big],
    },
    {
      label: "WOUNDED",
      rule: "Shooting",
      text: "If the shooting attack inflicts at least one casualty, the enemy unit takes a fatigue once the shooting attack is resolved.",
      price: [Dice.middle],
    },
    {
      label: "ENVELOPMENT",
      rule: "Activation/Reaction",
      text: "Trigger this ability after an enemy unit activates, but before their activation is resolved. Activate all your mounted units to move.",
      price: [Dice.big],
    },
    {
      label: "SUPERIORITY",
      rule: "Melee or shooting",
      text: "Remove a fatigue from the enemy unit to inflict two extra automatic hits.",
      price: [Dice.small],
    },
    {
      label: "GALLOP",
      rule: "Activation/Reaction",
      text: "Trigger after an infantry unit has been activated to move or charge within M of one of your mounted units, but before the activation is resolved. Activate your mounted unit to move.",
      price: [Dice.small],
    },
    {
      label: "IMPACT",
      rule: "Activation (mounted unit)",
      text: "Activate a unit to charge or shoot. During this shooting attack, or the melee that follows the charge, you may re-roll any attack dice that score a 3 or less.",
      price: [Dice.small, Dice.small],
      plus: true,
    },
    {
      label: "VOLLEY FIRE",
      rule: "Activation (units with bows)",
      text: "Activate one of your units to shoot. For this shooting attack, the range of their bows is L + L.",
      price: [Dice.middle],
    },

    {
      label: "PURSUIT",
      rule: "Activation",
      text: "Activate a unit to charge - this generates no fatigue. This unit gets 3 bonus attack dice during the ensuung melle.",
      price: [Dice.big],
    },
    {
      label: "RETREAT",
      rule: "Melee",
      text: "Gain 2 defence dice (gain 2 extra defence dice if your unit is mounted and fighting foots).",
      price: [Dice.middle],
    },
    {
      label: "DEX AЇE",
      rule: "Activation",
      text: "Activate your Warlord for a charge that generates no fatigue. During the ensuing melee, they get 4 bonus attack dice, and gain Resilience(2)",
      price: [Dice.middle, Dice.big],
      plus: true,
    },
  ],
};
