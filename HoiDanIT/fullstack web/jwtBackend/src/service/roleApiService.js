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

const getAllRoles = async () => {
  try {
    let data = await db.Role.findAll({
      order: [['id', 'DESC']]
    })
    return {
      EM: `Get all roles succeeds`,
      EC: 0,
      DT: data
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

const deleteRole = async (id) => {
  try {
    let role = await db.Role.findOne({
      where: { id: id }
    })
    if (role) {
      await role.destroy()
    }
    return {
      EM: `Delete roles succeeds`,
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

const getRoleByGroup = async (id) => {
  try {
    if (!id) {
      return {
        EM: 'Not found any roles',
        EC: 0,
        DT: []
      }
    }

    let roles = await db.Group.findOne({
      where: { id: id },
      attributes: ['id', 'name', 'description'],
      include: {
        model: db.Role,
        attributes: ['id', 'url', 'description'],
        through: { attributes: [] }
      }
    })
    return {
      EM: `Get roles by group succeeds`,
      EC: 0,
      DT: roles
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
  createNewRoles,
  getAllRoles,
  deleteRole,
  getRoleByGroup
}
