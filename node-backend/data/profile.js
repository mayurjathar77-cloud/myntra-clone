const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'profile.json');

async function getProfile() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

async function storeProfile(profile) {
  await fs.writeFile(filePath, JSON.stringify(profile, null, 2));
}

exports.getProfile = getProfile;
exports.storeProfile = storeProfile;
