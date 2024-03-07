import getWisdomWhisper from 'wisdom-whispers';

function displayCelestialWisdom(input) {
  const wisdom = getWisdomWhisper(input);
  const celestialWisdom = `🌌✨ ${wisdom} ✨🌌`;
  return celestialWisdom;
}

export default displayCelestialWisdom;