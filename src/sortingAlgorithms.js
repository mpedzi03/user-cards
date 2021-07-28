export function sortByZipcode (a, b) {
  if (a.address.zipcode < b.address.zipcode) {
    return -1
  } else if (a.address.zipcode > b.address.zipcode) {
    return 1
  }
  return 0
}

export function sortByLastNameAsc (a, b) {
  const x = a.name.split(' ')
  const lastNameA = x[x.length - 1].toLowerCase()

  const y = b.name.split(' ')
  const lastNameB = y[y.length - 1].toLowerCase()

  if (lastNameA < lastNameB) {
    return -1
  }
  if (lastNameA > lastNameB) {
    return 1
  }
  return 0
}

export function sortByLastNameDesc (a, b) {
  const x = a.name.split(' ')
  const lastNameA = x[x.length - 1].toLowerCase()

  const y = b.name.split(' ')
  const lastNameB = y[y.length - 1].toLowerCase()

  if (lastNameA < lastNameB) {
    return 1
  }
  if (lastNameA > lastNameB) {
    return -1
  }
  return 0
}

export function sortByUsername (a, b) {
  if (a.username < b.username) {
    return -1
  }
  if (a.username > b.username) {
    return 1
  }
  return 0
}

export function sortByEmail (a, b) {
  if (a.email < b.email) {
    return -1
  }
  if (a.email > b.email) {
    return 1
  }
  return 0
}
