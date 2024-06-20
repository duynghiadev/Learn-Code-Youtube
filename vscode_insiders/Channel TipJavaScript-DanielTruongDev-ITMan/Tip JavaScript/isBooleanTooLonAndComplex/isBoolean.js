// Decide whether this pizza is fantastic
if (
  (!pepperoniService.empty() || sausages.size() > 0) &&
  (useOnionFlag.get() || hasMushroom(ENOKI, PORTOBELLO)) &&
  hasCheese()
) {
  // buy it
}

// 1: 1️⃣
const isBooleanFantastic =
  (!pepperoniService.empty() || sausages.size() > 0) &&
  (useOnionFlag.get() || hasMushroom(ENOKI, PORTOBELLO)) &&
  hasCheese();

if (isBooleanFantastic) {
  // buy it
}

// 2: 2️⃣
const hasGoodMeet = !pepperoniService.empty() || sausages.size() > 0;
const hasGoodVeggies = useOnionFlag.get() || hasMushroom(ENOKI, PORTOBELLO);
const isPizzaFantastic = hasGoodMeet && hasGoodMeet && hasCheese();

if (isBooleanFantastic) {
  // buy it
}

// 3: 3️⃣
const isBooleanFantasticxxx = () => {
  if (!hasCheese()) return false;
  if (pepperoniService.empty() || sausages.size() === 0) return false;
  return useOnionFlag.get() || hasMushroom(ENOKI, PORTOBELLO);
};
