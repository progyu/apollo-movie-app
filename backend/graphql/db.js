export const people = [
  {
    id: '1',
    name: 'progyu',
    age: 30,
    gender: 'male'
  },
  {
    id: '2',
    name: 'gayoung',
    age: 30,
    gender: 'female'
  },
  {
    id: '3',
    name: 'musk',
    age: 56,
    gender: 'male'
  },
  {
    id: '4',
    name: 'jobs',
    age: 70,
    gender: 'male'
  }
]

export const getById = id => {
  const filteredPerson = people.filter(person => person.id === String(id))
  return filteredPerson[0]
}
