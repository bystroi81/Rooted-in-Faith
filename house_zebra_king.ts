//1
interface Faith {
  principal: string;
  values: string;
}

//2
const faith: Faith = {
  principal: "God",
  values: "Love, faith, and hope."
};

//3
function buildRootedInFaith(faith: Faith) {
  return `We are rooted in ${faith.principal}, whose core values are: ${faith.values}.`;
}

//4
const rootedInFaith = buildRootedInFaith(faith);
console.log(rootedInFaith);

//5
interface Devotion {
  dedication: boolean;
  trust: boolean;
  promise: boolean;
}

//6
const devotion: Devotion = {
  dedication: true,
  trust: true,
  promise: true
};

//7
function buildDevotion(devotion: Devotion) {
  return `Devotion grows when we ${
    devotion.dedication ? "dedicate" : ""
  } ourself to ${
    devotion.trust ? "trusting" : ""
  } in promises kept by ${
    devotion.promise ? "promising" : ""
  }, thus rooting ourselves in faith.`;
}

//8
const devotionToFaith = buildDevotion(devotion);
console.log(devotionToFaith);

//9
interface Wisdom {
  growth: boolean;
  understanding: boolean;
  discernment: boolean;
}

//10
const wisdom: Wisdom = {
  growth: true,
  understanding: true,
  discernment: true
};

//11
function buildWisdom(wisdom: Wisdom) {
  return `Gaining wisdom is a process of ${
    wisdom.growth ? "growth" : ""
  } that comes through ${
    wisdom.understanding ? "understanding" : ""
  } and ${
    wisdom.discernment ? "discernment" : ""
  }, and rooted in faith.`;
}

//12
const rootedInWisdom = buildWisdom(wisdom);
console.log(rootedInWisdom);

//13
interface Redemption {
  forgiveness: boolean;
  salvation: boolean;
  deliverance: boolean;
}

//14
const redemption: Redemption = {
  forgiveness: true,
  salvation: true,
  deliverance: true
};

//15
function buildRedemption(redemption: Redemption) {
  return `Redemption is achieved through ${
    redemption.forgiveness ? "forgiveness" : ""
  }, salvation is found in ${
    redemption.salvation ? "salvation" : ""
  } and is delivered through ${
    redemption.deliverance ? "deliverance" : ""
  }, all rooted in faith.`;
}

//16
const rootedInRedemption = buildRedemption(redemption);
console.log(rootedInRedemption);

//17
interface Hope {
  assurance: boolean;
  encouragement: boolean;
  guidance: boolean;
}

//18
const hope: Hope = {
  assurance: true,
  encouragement: true,
  guidance: true
};

//19
function buildHope(hope: Hope) {
  return `The hope we find is one that brings ${
    hope.assurance ? "assurance" : ""
  }, encouragement through ${
    hope.encouragement ? "encouragement" : ""
  } and guidance from ${
    hope.guidance ? "guidance" : ""
  }, all rooted in faith.`;
}

//20
const rootedInHope = buildHope(hope);
console.log(rootedInHope);

//21
interface Joy {
  contentment: boolean;
  peace: boolean;
  fulfillment: boolean;
}

//22
const joy: Joy = {
  contentment: true,
  peace: true,
  fulfillment: true
};

//23
function buildJoy(joy: Joy) {
  return `Finding joy in life brings ${
    joy.contentment ? "contentment" : ""
  }, peace through ${
    joy.peace ? "peace" : ""
  } and fulfillment from ${
    joy.fulfillment ? "fulfillment" : ""
  }, all rooted in faith.`;
}

//24
const rootedInJoy = buildJoy(joy);
console.log(rootedInJoy);

//25
interface Love {
  embrace: boolean;
  sacrifice: boolean;
  embrace: boolean;
}

//26
const love: Love = {
  embrace: true,
  sacrifice: true,
  embrace: true
};

//27
function buildLove(love: Love) {
  return `Love is found through ${
    love.embrace ? "embracing" : ""
  }, sacrifice through ${
    love.sacrifice ? "sacrificing" : ""
  } and giving through ${love.embrace ? "embracing" : ""}, all rooted in faith.`;
}

//28
const rootedInLove = buildLove(love);
console.log(rootedInLove);

//29
interface Joy {
  contentment: boolean;
  peace: boolean;
  fulfillment: boolean;
}

//30
const joy: Joy = {
  contentment: true,
  peace: true,
  fulfillment: true
};

//31
function buildJoy(joy: Joy) {
  return `Finding joy in life brings ${
    joy.contentment ? "contentment" : ""
  }, peace through ${
    joy.peace ? "peace" : ""
  } and fulfillment from ${
    joy.fulfillment ? "fulfillment" : ""
  }, all rooted in faith.`;
}

//32
const rootedInJoy = buildJoy(joy);
console.log(rootedInJoy);

//33
interface Strength {
  perseverance: boolean;
  character: boolean;
  courage: boolean;
}

//34
const strength: Strength = {
  perseverance: true,
  character: true,
  courage: true
};

//35
function buildStrength(strength: Strength) {
  return `Strength comes through ${
    strength.perseverance ? "perseverance" : ""
  }, character through ${
    strength.character ? "character" : ""
  } and courage from ${
    strength.courage ? "courage" : ""
  }, all rooted in faith.`;
}

//36
const rootedInStrength = buildStrength(strength);
console.log(rootedInStrength);

//37
interface Creation {
  love: boolean;
  beauty: boolean;
  purpose: boolean;
}

//38
const creation: Creation = {
  love: true,
  beauty: true,
  purpose: true
};

//39
function buildCreation(creation: Creation) {
  return `Creation is filled with ${
    creation.love ? "love" : ""
  }, beauty through ${
    creation.beauty ? "beauty" : ""
  } and purpose from ${creation.purpose ? "purpose" : ""}, all rooted in faith.`;
}

//40
const rootedInCreation = buildCreation(creation);
console.log(rootedInCreation);

//41
interface Possibility {
  ambition: boolean;
  innovation: boolean;
  creativity: boolean;
}

//42
const possibility: Possibility = {
  ambition: true,
  innovation: true,
  creativity: true
};

//43
function buildPossibility(possibility: Possibility) {
  return `Possibility is seen through ${
    possibility.ambition ? "ambition" : ""
  }, innovation through ${
    possibility.innovation ? "innovation" : ""
  } and creativity from ${
    possibility.creativity ? "creativity" : ""
  }, all rooted in faith.`;
}

//44
const rootedInPossibility = buildPossibility(possibility);
console.log(rootedInPossibility);

//45
interface Miracle {
  power: boolean;
  compassion: boolean;
  grace: boolean;
}

//46
const miracle: Miracle = {
  power: true,
  compassion: true,
  grace: true
};

//47
function buildMiracle(miracle: Miracle) {
  return `Miracle come through ${
    miracle.power ? "power" : ""
  }, compassion through ${
    miracle.compassion ? "compassion" : ""
  } and grace from ${
    miracle.grace ? "grace" : ""
  }, all rooted in faith.`;
}

//48
const rootedInMiracle = buildMiracle(miracle);
console.log(rootedInMiracle);

//49
interface Truth {
  righteousness: boolean;
  integrity: boolean;
  honesty: boolean;
}

//50
const truth: Truth = {
  righteousness: true,
  integrity: true,
  honesty: true
};

//51
function buildTruth(truth: Truth) {
  return `The truth brings ${
    truth.righteousness ? "righteousness" : ""
  }, integrity through ${
    truth.integrity ? "integrity" : ""
  } and honesty from ${
    truth.honesty ? "honesty" : ""
  }, all rooted in faith.`;
}

//52
const rootedInTruth = buildTruth(truth);
console.log(rootedInTruth);

//53
interface Faith {
  reliance: boolean;
  confidence: boolean;
  acceptance: boolean;
}

//54
const faith: Faith = {
  reliance: true,
  confidence: true,
  acceptance: true
};

//55
function buildFaith(faith: Faith) {
  return `Our faith is founded in ${
    faith.reliance ? "reliance" : ""
  }, confidence through ${
    faith.confidence ? "confidence" : ""
  } and acceptance from ${faith.acceptance ? "acceptance" : ""}, all rooted in faith.`;
}

//56
const rootedInFaith = buildFaith(faith);
console.log(rootedInFaith);

//57
interface Belief {
  conviction: boolean;
  loyalty: boolean;
  conviction: boolean;
}

//58
const belief: Belief = {
  conviction: true,
  loyalty: true,
  conviction: true
};

//59
function buildBelief(belief: Belief) {
  return `Belief grows through ${
    belief.conviction ? "conviction" : ""
  }, loyalty through ${
    belief.loyalty ? "loyalty" : ""
  } and commitment from ${belief.conviction ? "conviction" : ""}, all rooted in faith.`;
}

//60
const rootedInBelief = buildBelief(belief);
console.log(rootedInBelief);