import { countries, letters } from './data'

export const groupNamesBy = (by: string) => {
  if (by === 'length') {
    return groupNamesByLength()
  }

  if (by === 'word-count') {
    return groupNamesByWordCount()
  }

  if (by === 'start-with') {
    return groupNamesByStartingLetter()
  }

  if (by === 'end-with') {
    return groupNamesByEndingLetter()
  }

  if (by === 'consecutive') {
    return groupNamesByConsecutiveLetters()
  }

  if (by === 'repeating') {
    return groupNamesByRepeatingLetters()
  }

  return {}
}

const groupNamesByStartingLetter = (): object => {
  const grouped = {}

  letters.forEach((letter) => {
    grouped[letter] = countries.filter((name) =>
      name.toLowerCase().startsWith(letter),
    )
  })

  return grouped
}

const groupNamesByEndingLetter = (): object => {
  const grouped = {}

  letters.forEach((letter) => {
    grouped[letter] = countries.filter((name) =>
      name.toLowerCase().endsWith(letter),
    )
  })

  return grouped
}

const groupNamesByConsecutiveLetters = (): object => {
  const grouped = {}

  letters.forEach((letter) => {
    grouped[letter] = countries.filter(
      (name) => name.toLowerCase().indexOf(`${letter}${letter}`) !== -1,
    )
  })

  return grouped
}

const groupNamesByRepeatingLetters = (): object => {
  const grouped = {}

  letters.forEach((letter) => {
    grouped[letter] = countries.filter((name) => {
      return !!name
        .split(' ')
        .filter(
          (n) =>
            (n.toLowerCase().match(new RegExp(letter, 'g')) || []).length > 2,
        ).length
    })
  })

  return grouped
}

const groupNamesByLength = (): object => {
  const grouped = {}

  countries
    .map((name) => {
      return { name, length: name.length }
    })
    .sort((a, b) => a.length - b.length)
    .forEach((obj) => {
      const key = `l${obj.length}`
      if (!grouped[key]) {
        grouped[key] = []
      }
      grouped[key].push(obj.name)
    })

  return grouped
}

const groupNamesByWordCount = (): object => {
  const grouped = {}

  countries
    .map((name) => {
      return { name, length: name.split(' ').length }
    })
    .sort((a, b) => a.length - b.length)
    .forEach((obj) => {
      const key = `l${obj.length}`
      if (!grouped[key]) {
        grouped[key] = []
      }
      grouped[key].push(obj.name)
    })

  return grouped
}
