export default (state = [], action) => {
  let idx
  let quote
  let newQuote

  
  switch(action.type){
  
    case "ADD_QUOTE":
      return [ ...state, action.quote].map(state => Object.assign({}, state, {votes: 0})) 

    case "REMOVE_QUOTE":
      return [...state.filter(quote => quote.id !== action.quoteId )]

    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[idx]
      newQuote = {...quote}
      newQuote.votes += 1
      return [...state.slice(0, idx), newQuote, ...state.slice(idx + 1)]

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[idx]
      newQuote = {...quote}
      newQuote.votes === 0 ? newQuote.votes = 0 : newQuote.votes -= 1
      return [ ...state.slice(0, idx), newQuote, ...state.slice(idx + 1)]
      
    default:
      return state;
  }
}
