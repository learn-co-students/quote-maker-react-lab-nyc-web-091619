// TODO: Create action creators as defined in tests
export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote: Object.assign({}, quote, { votes: 0 })
  }
}

export const removeQuote = quoteID => {
  return {
    type: 'REMOVE_QUOTE',
    quoteID
  }
}

export const upVoteQuote = quoteID => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteID
  }
}

export const downVoteQuote = quoteID => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteID
  }
}
