import React from 'react';
import {Route, IndexRoute,Redirect} from 'react-router';
import Master from './components/index/Master';
import Index from './components/index/Index';
import Customer from './components/list/Customer';
import Setting from './components/list/Setting';
import About from './components/list/About';
import Opinion from './components/list/Opinion';
import Audit from './components/list/Audit';
import Contact from './components/list/Contact';
import Order from './components/list/Order';
import Record from './components/list/Record';
import Photo from './components/list/Photo';
import Check from './components/list/Check';
import Bulletin from './components/list/Bulletin';
import Work from './components/list/Work';
import Details from './components/public/Details';
import Fastnew from './components/public/Fastnew';
import New from './components/public/New';
import Reference from './components/public/Reference';
const path = ['customer', 'contact', 'record', 'order']
const AppRouters = (
    <Route path='/' component={Master}>
        <IndexRoute component={Index} />
        <Route path='customer'>
            <IndexRoute component={Customer}/>
            <Route path='fastnew' component={Fastnew} />
            <Route path='new' component={New} />
            <Route path=':id' component={Details} />

        </Route>
        <Route path='reference/:type' component={Reference} />
        <Route path='setting'>
            <IndexRoute component={Setting}/>
            <Route path='about' component={About} />
            <Route path='opinion' component={Opinion} />
        </Route>
        <Route path='contact'>
            <IndexRoute component={Contact}/>
            <Route path='new' component={New} />
            <Route path='fastnew' component={Fastnew} />
            <Route path=':id' component={Details} />
        </Route>
        <Route path='record'>
            <IndexRoute component={Record}/>
            <Route path='new' component={New} />
            <Route path='fastnew' component={Fastnew} />
            <Route path=':id' component={Details} />
        </Route>
        <Route path='audit' component={Audit} />
        <Route path='check' component={Check} />
        <Route path='order'>
            <IndexRoute component={Order}/>
            <Route path='new' component={New} />
            <Route path='fastnew' component={Fastnew} />
            <Route path=':id' component={Details} />
        </Route>
        <Route path='photo' component={Photo} />
        <Route path='bulletin' component={Bulletin} />
        <Route path='work' component={Work} />
    </Route>
)
export default AppRouters;
