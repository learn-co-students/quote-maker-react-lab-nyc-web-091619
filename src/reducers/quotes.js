export default (state = [], action) => {
  let idx
  switch (action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      let newQuote = {...state[idx], votes: (state[idx].votes + 1)}
      return [...state.slice(0, idx), newQuote, ...state.slice(idx + 1)]

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      newQuote = {...state[idx], votes: Math.max(0, (state[idx].votes - 1))}
      return [...state.slice(0, idx), newQuote, ...state.slice(idx + 1)]
    
    default:
      return state;
  }
}
