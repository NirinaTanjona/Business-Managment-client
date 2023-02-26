export interface TradeType {
  id: string,
  created: string,
  modified: string,
  status: number,
  activate_date: string,
  market: string,
  direction: string,
  closed_position: string,
  entry_price: number,
  stop_loss_price: number,
  take_profit_price: number,
  actual_exit_price: number,
  risk_reward: string,
  screen_before: string,
  screen_after: string,
  trade_note: string,
  discipline_rating: number,
  emotional_state_of_mind: string
}

interface Attributes {
  starting_balance: string,
  balance: string,
  total_number_of_trades: number,
  total_number_of_winning_trades: number,
  total_number_of_losing_trades: number,
  total_number_of_be_trade: number,
  largest_winning_trade: string,
  largest_losing_trade: string,
  avg_winning_trade: string,
  avg_losing_trade: string,
  total_trade_costs: string,
  total_profit_loss: string,
  average_profit_loss_per_trade: string,
  return_of_investment: string,
  average_risk_reward: string,
  average_risk_per_trade: string,
  average_reward_per_trade: string,
  trade_win_rate: string,
  trades: TradeType[]
}

export interface SummaryType {
  type: string,
  id: string,
  attributes: Attributes,
}