import { faker } from '@faker-js/faker'

const THRESHOLD = 100

export const users = Array.from(Array(THRESHOLD), () => {
  return {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    background: faker.image.nature()
  }
})
