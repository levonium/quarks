export const printLists = (
  lists: object,
  wrapper: HTMLElement,
  type: string,
): void => {
  Object.keys(lists).forEach((key) => {
    const list = makeList(key, lists[key], type)
    wrapper.appendChild(list)
    printList(lists[key], `countries-${type}-${key}`)
  })
}

export const printList = (list: string[], selector: string): void => {
  if (!list.length) return

  const wrapper = document.getElementById(selector)

  if (wrapper) {
    list.forEach((item, idx) => {
      const span = document.createElement('span')
      span.classList.add(
        'block',
        'border-b',
        'border-slate-100',
        'last-of-type:border-b-0',
        'py-1',
      )
      span.innerText = `${idx + 1}. ${item}`

      wrapper.appendChild(span)
    })
  }
}

export const makeList = (letter: string, list: string[], type: string) => {
  const hasItems = !!list.length

  const details = document.createElement('details')
  details.classList.add('mt-3', 'border-b', 'border-slate-100', 'pb-3')
  const summary = document.createElement('summary')
  const subListHeading = document.createElement('span')
  const numberOfCountries = `${list.length} ${list.length === 1 ? 'country' : 'countries'}`
  let headingText = `Letter "${letter.toUpperCase()}" - ${numberOfCountries}`
  if (type === 'length') {
    headingText = `${letter.substring(1)} letters - ${numberOfCountries}`
  }
  if (type === 'word-count') {
    const words = parseInt(letter.substring(1))
    headingText = `${words} ${words === 1 ? 'word' : 'words'} - ${numberOfCountries}`
  }
  subListHeading.classList.add('text-sky-600')
  subListHeading.innerText = headingText

  summary.append(subListHeading)
  details.appendChild(summary)

  if (hasItems) {
    const listItemsWrapper = document.createElement('div')
    listItemsWrapper.id = `countries-${type}-${letter}`
    listItemsWrapper.classList.add('mt-3', 'pl-6')
    details.appendChild(listItemsWrapper)
  }

  return details
}
