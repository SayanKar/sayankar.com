export type User = {
  id: string
  name: string
  image: string
}

export type Skill = {
  id: string
  name: string
  users: User[]
}

export type SkillCategory = {
  name: string
  skills: Skill[]
}