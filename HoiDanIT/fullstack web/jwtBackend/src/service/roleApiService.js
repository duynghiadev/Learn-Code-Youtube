import db from '../models/index'

const createNewRoles = async (roles) => {
  try {
    let currentRoles = await db.Role.findAll({
      attributes: ['url', 'description'],
      raw: true
    })

    const persist = roles.filter(({ url: url1 }) => !currentRoles.some(({ url: url2 }) => url1 === url2))

    if (persist.length === 0) {
      return {
        EM: 'Nothing to create...',
        EC: 0,
        DT: []
      }
    }

    await db.Role.bulkCreate(persist)
    return {
      EM: `Create roles update succeeds ${persist.length} roles...`,
      EC: 0,
      DT: []
    }
  } catch (error) {
    console.log(error)
    return {
      EM: 'Something wrongs with service',
      EC: 1,
      DT: []
    }
  }
}

module.exports = {
  createNewRoles
}
