import { printChart } from './charts'
import { countries } from './data'
import { groupNamesBy } from './functions'
import { printList, printLists } from './list'

document.addEventListener('DOMContentLoaded', () => {
  // countries list in alphabetical order
  printList(countries, 'countries-list')

  // how many country names starting/ending with each letter
  // number of country names containing each letter the most amount of time, consecutive/non-consecutive
  // country names by length/word count
  const types = [
    'start-with',
    'end-with',
    'consecutive',
    'repeating',
    'length',
    'word-count',
  ]

  types.forEach((type) => {
    const wrapper = document.getElementById(`countries-${type}`)

    if (wrapper) {
      const names = groupNamesBy(type)

      printLists(names, wrapper, type)

      const chartWrapper = document.getElementById(`countries-${type}-chart`)
      if (chartWrapper) {
        printChart(
          chartWrapper as HTMLCanvasElement,
          Object.values(names).map((v: string[]) => v.length),
          ['length', 'word-count'].includes(type)
            ? Object.keys(names).map((key) => key.substring(1))
            : null,
        )
      }
    }
  })
})
