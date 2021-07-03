import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PagesPromotionForm from './Promotion/Form'
import PagesPromotionSearch from './Promotion/Search'

const Root = () => {

  return(
    <Router>
      <Switch>
        <Route path="/create" component={PagesPromotionForm} />
        <Route path="/edit/:id" component={PagesPromotionForm} />
        <Route path="/" component={PagesPromotionSearch} exact />
      </Switch>
    </Router>
  )
}

export default Root